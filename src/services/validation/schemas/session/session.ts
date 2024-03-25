import i18next from "i18next";
import { z } from "zod";

import { createMinutesAndSecondsSchema, createMinMaxValidationError } from "./helpers";

const NAME_MIN_LENGTH = 2;
const NAME_MAX_LENGTH = 40;

export const exerciseSchema = z.object({
  id: z
    .string()
    .uuid(),
  name: z
    .string()
    .trim()
    .min(
      NAME_MIN_LENGTH,
      createMinMaxValidationError(NAME_MIN_LENGTH, NAME_MAX_LENGTH)
    )
    .max(
      NAME_MAX_LENGTH,
      createMinMaxValidationError(NAME_MIN_LENGTH, NAME_MAX_LENGTH)
    ),
  duration: z.object({
    minutes: createMinutesAndSecondsSchema(),
    seconds: createMinutesAndSecondsSchema(),
  }),
  intensityLevel: z.union([
    z.literal("LOW"),
    z.literal("MEDIUM"),
    z.literal("HIGH"),
  ]),
})

export type ExerciseSchemaType = z.infer<typeof exerciseSchema>

export const blockSchema = z.object({
  id: z
    .string()
    .uuid(),
  name: z
    .string()
    .trim()
    .min(
      NAME_MIN_LENGTH,
      createMinMaxValidationError(NAME_MIN_LENGTH, NAME_MAX_LENGTH)
    )
    .max(
      NAME_MAX_LENGTH,
      createMinMaxValidationError(NAME_MIN_LENGTH, NAME_MAX_LENGTH)
    ),
  iterations: z.coerce
    .number()
    .int({ message: i18next.t("mustBeAnInteger") })
    .min(1, { message: i18next.t("mustBeAtLeast", { min: 1 }) }),
  exercises: z
    .array(exerciseSchema)
    .min(1),
})

export type BlockSchemaType = z.infer<typeof blockSchema>

export const sessionSchema = z.object({
  id: z
    .string()
    .uuid(),
  createdAt: z
    .string()
    .datetime(),
  name: z
    .string()
    .trim()
    .min(
      NAME_MIN_LENGTH,
      createMinMaxValidationError(NAME_MIN_LENGTH, NAME_MAX_LENGTH)
    )
    .max(
      NAME_MAX_LENGTH,
      createMinMaxValidationError(NAME_MIN_LENGTH, NAME_MAX_LENGTH)
    ),
  blocks: z
    .array(blockSchema)
    .min(1),
});

export type SessionSchemaType = z.infer<typeof sessionSchema>
