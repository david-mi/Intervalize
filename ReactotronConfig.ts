import Constants from "expo-constants";
import { ArgType } from "reactotron-core-client";
import Reactotron, { type ReactotronReactNative } from "reactotron-react-native";
import mmkvPlugin from "reactotron-react-native-mmkv";

import { storage } from "@/storage";

Reactotron
  .configure({
    name: "Intervalize",
    getClientId: async () => Constants.installationId,
  })
  .use(mmkvPlugin<ReactotronReactNative>({ storage }))
  .useReactNative()
  .connect();

Reactotron.onCustomCommand({
  command: "[MMKV Storage] Get one item",
  handler: async (params) => {
    try {
      const item = storage.getString(params!.key);
      let parsedItem

      if (item !== undefined) {
        try {
          parsedItem = JSON.parse(item)
        } catch (e) {
          Reactotron.logImportant(e);
          parsedItem = item
        }
      }

      console.log(parsedItem)
    } catch (e) {
      Reactotron.logImportant(e);
    }
  },
  args: [{
    name: "key",
    type: ArgType.String,
  }],
});

Reactotron.onCustomCommand({
  command: "[MMKV Storage] Get all items",
  handler: async () => {
    try {
      const parsedStorage = storage.getAllKeys().reduce<Record<string, string | number | boolean>>((storageObject, storageKey) => {
        const item = storage.getString(storageKey)

        if (item !== undefined) {
          try {
            storageObject[storageKey] = JSON.parse(item)
          } catch (e) {
            Reactotron.logImportant(e);
            storageObject[storageKey] = item
          }
        }

        return storageObject
      }, {})

      console.log(parsedStorage)
    } catch (e) {
      Reactotron.logImportant(e);
    }
  },
});

Reactotron.onCustomCommand({
  command: "[MMKV Storage] Clear all items",
  handler: async () => {
    try {
      storage.clearAll()
    } catch (e) {
      Reactotron.logImportant(e);
    }
  },
});