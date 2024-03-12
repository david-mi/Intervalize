import { getLocales } from "expo-localization";
import i18n from "i18next";
import React from "react";
import { AppState } from "react-native";

export function useLanguageChanges() {
  const appState = React.useRef(AppState.currentState);

  React.useEffect(() => {
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
  }, [])
}