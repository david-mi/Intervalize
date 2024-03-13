import { getLocales } from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { enTranslations } from "./locales/en";
import { frTranslation } from "./locales/fr";

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: "v3",
    resources: {
      en: {
        translation: enTranslations,
      },
      fr: {
        translation: frTranslation,
      },
    },
    lng: getLocales()[0].languageCode || "fr",
    fallbackLng: "fr",

    interpolation: {
      escapeValue: false,
    },
  });