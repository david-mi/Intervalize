import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { View } from "react-native";

import { styles } from "./app.styles";
import GlobalContextProvider from "./src/context/GlobalContext";
import Routes from "./src/routes/routes";

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

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <GlobalContextProvider>
      <View onLayout={onLayoutRootView} style={styles.app}>
        <Routes />
      </View>
    </GlobalContextProvider>
  );
}