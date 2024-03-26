import i18next from "i18next";
import { z } from "zod";

export function createMinutesAndSecondsSchema() {
  return z
    .union([z.string(), z.number()])
    .refine(
      (value) => !isNaN(Number(value)) && value !== "",
      { message: i18next.t("mustBeAValidNumber") }
    )
    .transform(Number)
    .refine(
      (valueToNumber) => Number.isInteger(valueToNumber),
      { message: i18next.t("mustBeAnInteger") }
    )
    .refine(
      (valueToNumber) => valueToNumber >= 0 && valueToNumber < 60,
      { message: i18next.t("mustContainBetween", { min: 0, max: 59 }) }
    );
}

export const createMinMaxValidationError = (min: number, max: number) => ({
  message: i18next.t("mustContainBetween", { min, max }),
})
