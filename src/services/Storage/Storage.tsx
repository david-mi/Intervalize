import AsyncStorage from "@react-native-async-storage/async-storage";

import { defaultStorageData } from "@/data/defaultUserSettings";
import type { AsyncStorageType } from "@/types";

export const storageService = {
  async getData<K extends keyof AsyncStorageType>(key: K): Promise<AsyncStorageType[K] | null> {
    const dataFromAsyncStorage = await AsyncStorage.getItem(key)

    return dataFromAsyncStorage === null
      ? null
      : JSON.parse(dataFromAsyncStorage)
  },
  async setData<K extends keyof AsyncStorageType>(key: K, data: AsyncStorageType[K]) {
    const dataToJson = JSON.stringify(data)
    await AsyncStorage.setItem(key, dataToJson)
  },
  async handleMissingProperties<K extends keyof AsyncStorageType>(targetKey: K, targetData: AsyncStorageType[K]) {
    const completeData = { ...defaultStorageData[targetKey] }
    let haveMissingKey = false

    for (const completeDataKey in completeData) {
      if (completeDataKey in targetData) {
        completeData[completeDataKey] = targetData[completeDataKey]
      } else {
        haveMissingKey = true
      }
    }

    if (haveMissingKey) {
      await storageService.setData(targetKey, completeData)
    }

    return completeData
  },
}