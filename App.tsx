import { useFonts } from "expo-font";
import { activateKeepAwakeAsync, deactivateKeepAwake } from "expo-keep-awake";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect } from "react";
import { View } from "react-native";

import { styles } from "./app.styles";
import Routes from "./src/routes/routes";

import useBoundedStore from "@/store/store";
import "./src/langs/config"
import "expo-dev-client";

if (__DEV__) {
  import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));
}

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "clockicons": require("./assets/fonts/clockicons.ttf"),
    "oswald-light": require("./assets/fonts/Oswald-Light.ttf"),
    "oswald-regular": require("./assets/fonts/Oswald-Regular.ttf"),
    "oswald-medium": require("./assets/fonts/Oswald-Medium.ttf"),
    "oswald-bold": require("./assets/fonts/Oswald-Bold.ttf"),
  });

  const toggleKeepScreenAwake = useBoundedStore(({ userSettings }) => userSettings.toggleKeepScreenAwake)

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  useEffect(() => {
    try {
      if (toggleKeepScreenAwake) {
        activateKeepAwakeAsync("INTERVALIZE_SCREEN_AWAKE")
      } else {
        deactivateKeepAwake("INTERVALIZE_SCREEN_AWAKE")
      }
    } catch (error) {
      console.log(error)
    }
  }, [toggleKeepScreenAwake])

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={styles.app}>
      <Routes />
    </View>
  );
}