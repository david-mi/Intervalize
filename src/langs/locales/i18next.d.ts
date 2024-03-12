import fr from "./en/translation.json"

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "fr";
    resources: {
      fr: typeof fr
    };
  }
}