export type IntensityLevel = "LOW" | "MEDIUM" | "HARD"

export type SessionStatus = "NOT_SELECTED" | "READY_TO_START" | "ACTIVE" | "PAUSED" | "FINISHED"

export interface Step {
  name: string
  intensityLevel: IntensityLevel
  duration: {
    minutes: number
    seconds: number
  }
}

export interface Session {
  id: string
  name: string
  createdAt: Date
  steps: Step[]
}

export type TabNavParamList = {
  "Mes sessions": undefined
  "Session en cours": undefined
};