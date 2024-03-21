import type { ExerciseSchemaType, BlockSchemaType, SessionSchemaType } from "./schemas"

export type ExerciseType = ExerciseSchemaType
export type BlockType = BlockSchemaType
export type SessionType = SessionSchemaType

export type IntensityLevel = "LOW" | "MEDIUM" | "HIGH"

export type SessionStatus = "NOT_SELECTED" | "READY_TO_START" | "ACTIVE" | "PAUSED" | "FINISHED"

export interface Time<T extends number | string = number> {
  minutes: T
  seconds: T
}

export enum CustomFontsList {
  CLOCKICONS = "clockicons",
  OSWALD_LIGHT = "oswald-light",
  OSWALD_REGULAR = "oswald-regular",
  OSWALD_MEDIUM = "oswald-medium",
  OSWALD_BOLD = "oswald-bold"
}

export type CustomFont = `${CustomFontsList}`

export type Theme = "light" | "dark" | "adaptative"

export interface UserSettings {
  vibrationsEnabled: boolean,
  vibrationPattern: number[],
  intensityColorsEnabled: boolean,
  intensityColors: { [key in IntensityLevel]: string }
  toggleKeepScreenAwake: boolean,
  theme: Theme
}

export interface StorageType {
  userSettings: UserSettings
}