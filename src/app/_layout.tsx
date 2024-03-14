import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React from "react"

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

  React.useEffect(() => {
    if (fontError) throw fontError;
  }, [fontError]);

  React.useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar
        hidden={false}
        style="dark"
        translucent
      />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
          contentStyle: { backgroundColor: "white" },
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="settings" />
      </Stack>
    </>
  )
}

export default Layout