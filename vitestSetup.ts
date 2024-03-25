import { enTranslations } from "@langs/locales/en";
import i18n from "i18next";
import { beforeAll } from "vitest"

beforeAll((() => {
  i18n
    .init({
      compatibilityJSON: "v3",
      resources: {
        en: {
          translation: enTranslations,
        },
      },
      lng: "en",
    });
}))
