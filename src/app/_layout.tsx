import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React from "react"
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { useInitTheme } from "@/hooks/useInitTheme";
import { useKeepScreenAwake } from "@/hooks/useKeepScreenAwake";
import { useLanguageChanges } from "@/hooks/useLanguageChange";
import "@langs/config"
import "expo-dev-client";

if (__DEV__) {
  import("../tools/reactotron").then(() => console.log("Reactotron Configured"));
}

SplashScreen.preventAutoHideAsync();

function Layout() {
  const [fontsLoaded, fontError] = useFonts({
    "clockicons": require("../../assets/fonts/clockicons.ttf"),
    "oswald-light": require("../../assets/fonts/Oswald-Light.ttf"),
    "oswald-regular": require("../../assets/fonts/Oswald-Regular.ttf"),
    "oswald-medium": require("../../assets/fonts/Oswald-Medium.ttf"),
    "oswald-bold": require("../../assets/fonts/Oswald-Bold.ttf"),
  });
  useLanguageChanges()
  useKeepScreenAwake()
  const { themeInitialized, theme } = useInitTheme()
  const hideSplashScreen = fontsLoaded && themeInitialized

  React.useEffect(() => {
    if (fontError) throw fontError;
  }, [fontError]);

  React.useEffect(() => {
    if (hideSplashScreen) {
      SplashScreen.hideAsync();
    }
  }, [hideSplashScreen]);

  if (!hideSplashScreen) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
          navigationBarColor: theme.COLORS.NAVIGATION_BAR,
          statusBarColor: theme.COLORS.NAVIGATION_BAR,
          statusBarStyle: theme.STATUS_BAR_STYLE,
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="settings" />
      </Stack>
    </GestureHandlerRootView>
  )
}

export default Layout
