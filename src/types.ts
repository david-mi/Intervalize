export type IntensityLevel = "LOW" | "MEDIUM" | "HARD"

export type SessionStatus = "NOT_SELECTED" | "READY_TO_START" | "ACTIVE" | "PAUSED" | "FINISHED"

export interface Exercise {
  name: string
  intensityLevel: IntensityLevel
  duration: {
    minutes: number
    seconds: number
  }
}

export interface Block {
  repetitions: number
  exercises: Exercise[]
}

export interface Session {
  id: string
  name: string
  createdAt: Date
  blocks: Block[]
}

export type TabNavParamList = {
  "Mes sessions": undefined
  "Session en cours": undefined
};

export enum CustomFontsList {
  CLOCKICONS = "clockicons",
  OSWALD_LIGHT = "oswald-light",
  OSWALD_REGULAR = "oswald-regular",
  OSWALD_MEDIUM = "oswald-medium",
  OSWALD_BOLD = "oswald-bold",
}

export type CustomFont = `${CustomFontsList}`
