import type { ImmerStateCreator } from "../store"

import type { SessionStatus, SessionType, IntensityLevel } from "@/types"

export interface SessionsSliceType {
  sessionStatus: SessionStatus,
  setSessionStatus: (sessionStatus: SessionStatus) => void,
  sessions: SessionType[]
  setSessions: (sessions: SessionType[]) => void,
  addSession: (session: SessionType) => void,
  updateSession: (sessionId: SessionType) => void,
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
  sessions: [],
  setSessions: (sessions) => {
    set(state => {
      state.sessions = sessions
    })
  },
  addSession: (sessionToAdd) => {
    set(state => {
      state.sessions.push(sessionToAdd)
    })
  },
  updateSession: (sessionToUpdate) => {
    set(state => {
      const sessionToUpdateIndex = state.sessions.findIndex((session) => session.id === sessionToUpdate.id)
      if (sessionToUpdateIndex !== -1) {
        state.sessions[sessionToUpdateIndex] = sessionToUpdate
      }
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