import { z } from "zod";

export const exerciseSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(3),
  duration: z.object({
    minutes: z.coerce
      .number()
      .int()
      .nonnegative()
      .max(59),
    seconds: z.coerce
      .number()
      .int()
      .nonnegative()
      .max(59),
  }),
  intensityLevel: z.union([
    z.literal("LOW"),
    z.literal("MEDIUM"),
    z.literal("HIGH"),
  ]),
})

export type ExerciseSchemaType = z.infer<typeof exerciseSchema>

export const blockSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(3),
  iterations: z.coerce
    .number()
    .int()
    .positive()
    .min(1),
  exercises: z.array(exerciseSchema).min(1),
})

export type BlockSchemaType = z.infer<typeof blockSchema>

export const sessionSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.string().datetime(),
  name: z.string().min(1),
  blocks: z.array(blockSchema).min(1),
});

export type SessionSchemaType = z.infer<typeof sessionSchema>