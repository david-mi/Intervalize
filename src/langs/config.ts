import { getLocales } from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEn from "./locales/en/translation.json";
import translationFr from "./locales/fr/translation.json";

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: "v3",
    resources: {
      en: {
        translation: translationEn,
      },
      fr: {
        translation: translationFr,
      },
    },
    lng: getLocales()[0].languageCode || "fr",
    fallbackLng: "fr",

    interpolation: {
      escapeValue: false,
    },
  });