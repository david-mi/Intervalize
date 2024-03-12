import { getLocales } from "expo-localization";
import i18n from "i18next";
import React from "react";

export function useLanguageChanges() {
  React.useEffect(() => {
    const deviceLanguage = getLocales()[0].languageCode || "fr"
    const hasChangedLanguage = deviceLanguage !== i18n.language
    if (hasChangedLanguage) {
      i18n.changeLanguage(deviceLanguage)
    }
  }, [])
}