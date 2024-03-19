import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React from "react"

import { useInitTheme } from "@/hooks/useInitTheme";
import { useKeepScreenAwake } from "@/hooks/useKeepScreenAwake";
import { useLanguageChanges } from "@/hooks/useLanguageChange";

import "../langs/config"
import "expo-dev-client";

if (__DEV__) {
  import("ReactotronConfig").then(() => console.log("Reactotron Configured"));
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
    <>
      <StatusBar
        backgroundColor={theme.COLORS.STATUS_BAR}
        hidden={false}
        style={theme.COLORS.STATUS_BAR === "white" ? "dark" : "light"}
      />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
          navigationBarColor: theme.COLORS.NAVIGATION_BAR,
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="settings" />
      </Stack>
    </>
  )
}

export default Layout
