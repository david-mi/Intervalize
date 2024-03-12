import { useFonts } from "expo-font";
import { activateKeepAwakeAsync, deactivateKeepAwake } from "expo-keep-awake";
import { getLocales } from "expo-localization";
import * as SplashScreen from "expo-splash-screen";
import i18n from "i18next";
import { useCallback, useEffect, useRef } from "react";
import { View, AppState } from "react-native";

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
  const appState = useRef(AppState.currentState);

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

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      const hasComeForeground = appState.current.match(/inactive|background/) && nextAppState === "active"

      if (!hasComeForeground) return

      const deviceLanguage = getLocales()[0].languageCode || "fr"
      const hasChangedLanguage = deviceLanguage !== i18n.language

      if (hasChangedLanguage) {
        i18n.changeLanguage(deviceLanguage)
      }

      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={styles.app}>
      <Routes />
    </View>
  );
}