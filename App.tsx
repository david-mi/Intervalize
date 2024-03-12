import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./app.styles";
import Routes from "./src/routes/routes";

import { useKeepScreenAwake } from "@/hooks/useKeepScreenAwake";
import { useLanguageChanges } from "@/hooks/useLanguageChange";

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
  useLanguageChanges()
  useKeepScreenAwake()

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView onLayout={onLayoutRootView} style={styles.app}>
      <Routes />
      <StatusBar
        hidden={false}
        style="dark"
        translucent
      />
    </SafeAreaView>
  );
}