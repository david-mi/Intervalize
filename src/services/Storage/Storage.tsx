import AsyncStorage from "@react-native-async-storage/async-storage";
import type { AsyncStorageType } from "@/types";

export const storageService = {
  async getData<K extends keyof AsyncStorageType>(key: K): Promise<AsyncStorageType[K] | null> {
    const dataFromAsyncStorage = await AsyncStorage.getItem(key);

    return dataFromAsyncStorage === null
      ? null
      : JSON.parse(dataFromAsyncStorage)
  },
  async setData<K extends keyof AsyncStorageType>(key: K, data: AsyncStorageType[K]) {
    const dataToJson = JSON.stringify(data)
    await AsyncStorage.setItem(key, dataToJson)
  }
}