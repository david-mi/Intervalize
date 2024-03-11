export type IntensityLevel = "LOW" | "MEDIUM" | "HIGH"

export type SessionStatus = "NOT_SELECTED" | "READY_TO_START" | "ACTIVE" | "PAUSED" | "FINISHED"

export interface Time<T extends number | string = number> {
  minutes: T
  seconds: T
}

export interface Exercise {
  id: string
  name: string
  intensityLevel: IntensityLevel
  duration: Time
}

export interface Block {
  iterations: number
  exercises: Exercise[]
}

export interface Session {
  id: string
  name: string
  createdAt: Date
  blocks: Block[]
}

export type TabNavParamList = {
  "Mes séances": undefined
  "Séance en cours": undefined
};

export type RootStackParamList = {
  Home: undefined
  Settings: undefined
};

export type UserSettingsParamList = {
  List: undefined
  Vibrations: undefined
  Display: undefined
};

export type SessionsParamList = {
  MySessions: undefined
};

export enum CustomFontsList {
  CLOCKICONS = "clockicons",
  OSWALD_LIGHT = "oswald-light",
  OSWALD_REGULAR = "oswald-regular",
  OSWALD_MEDIUM = "oswald-medium",
  OSWALD_BOLD = "oswald-bold"
}

export type CustomFont = `${CustomFontsList}`

export interface UserSettings {
  vibrationsEnabled: boolean,
  vibrationPattern: number[],
  intensityColorsEnabled: boolean,
  intensityColors: { [key in IntensityLevel]: string }
  toggleKeepScreenAwake: boolean
}

export interface StorageType {
  userSettings: UserSettings
}