export type IntensityLevel = "LOW" | "MEDIUM" | "HARD"

export type SessionStatus = "STARTED" | "PAUSED" | "FINISHED"

export interface Step {
  name: string
  intensityLevel: IntensityLevel
  duration: {
    minutes: number
    seconds: number
  }
}

export interface Session {
  name: string
  createdAt: Date
  steps: Step[]
}