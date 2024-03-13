import type { TranslationType } from "./types";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "fr";
    resources: {
      fr: TranslationType
    };
  }
}