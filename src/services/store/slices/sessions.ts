import type { ImmerStateCreator } from "../store"

import { mockSessions } from "@/mocks"
import type { SessionStatus, SessionType, IntensityLevel } from "@/types"

export interface SessionsSliceType {
  sessionStatus: SessionStatus,
  setSessionStatus: (sessionStatus: SessionStatus) => void,
  sessions: SessionType[]
  setSessions: (sessions: SessionType[]) => void,
  currentSession: SessionType | null
  setCurrentSession: (session: SessionType | null) => void
  currentExerciseIntensityLevel: null | IntensityLevel
  setCurrentExerciseIntensityLevel: (currentExerciceIntensityLevel: null | IntensityLevel) => void
}

export const createSessionsSlice: ImmerStateCreator<SessionsSliceType> = (set) => ({
  sessionStatus: "NOT_SELECTED",
  setSessionStatus: (sessionStatus) => {
    set(state => {
      state.sessionStatus = sessionStatus
    })
  },
  sessions: mockSessions,
  setSessions: (sessions) => {
    set(state => {
      state.sessions = sessions
    })
  },
  currentSession: null,
  setCurrentSession: (currentSession) => {
    set(state => {
      state.currentSession = currentSession
    })
  },
  currentExerciseIntensityLevel: null,
  setCurrentExerciseIntensityLevel: (currentExerciseIntensityLevel) => {
    set(state => {
      state.currentExerciseIntensityLevel = currentExerciseIntensityLevel
    })
  },
})