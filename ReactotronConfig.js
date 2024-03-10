import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";
import { ArgType } from "reactotron-core-client";
import Reactotron from "reactotron-react-native";

Reactotron
  .setAsyncStorageHandler(AsyncStorage)
  .configure({
    name: "Intervalize",
    getClientId: async () => Constants.installationId,
  })
  .useReactNative()
  .connect();

Reactotron.onCustomCommand({
  command: "Get all items",
  handler: async () => {
    try {
      const storageKeys = (await AsyncStorage.getAllKeys());
      const multiget = await AsyncStorage.multiGet(storageKeys);
      const reduced = multiget.reduce((result, [key, value]) => {
        let parsedValue = value;

        try {
          parsedValue = JSON.parse(value);

        } catch (error) /*eslint-disable-line*/ { }

        result[key] = parsedValue;
        return result;
      }, {});
      Reactotron.log(reduced);
    } catch (e) {
      Reactotron.logImportant(e);
    }
  },
});

Reactotron.onCustomCommand({
  command: "Get one item",
  handler: async (params) => {
    try {
      const item = await AsyncStorage.getItem(params.key);
      const parsedItem = item === null
        ? null
        : JSON.parse(item);
      Reactotron.log(parsedItem);
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
  command: "Clear all items",
  handler: async () => {
    try {
      await AsyncStorage.clear();
      const storage = await AsyncStorage.getItem("userSettings");
      Reactotron.log({
        message: "Storage cleared",
        storage,
      });
    } catch (e) {
      Reactotron.logImportant(e);
    }
  },
});

Reactotron.onCustomCommand({
  command: "Set half of user settings",
  handler: async () => {
    try {
      await AsyncStorage.clear();
      await AsyncStorage.setItem("userSettings", JSON.stringify({ "vibrationsEnabled": true }));
      await AsyncStorage.getItem("userSettings");
    } catch (e) {
      Reactotron.logImportant(e);
    }
  },
});