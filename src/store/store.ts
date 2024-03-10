import { type StateCreator, create } from "zustand";
import { immer } from "zustand/middleware/immer"

import { defaultUserSettings } from "@/data/defaultUserSettings";
import { mockSessions } from "@/mocks";
import type { IntensityLevel, Session, SessionStatus, UserSettings } from "@/types";

interface SessionsSliceType {
  sessionStatus: SessionStatus,
  setSessionStatus: (sessionStatus: SessionStatus) => void,
  sessions: Session[]
  setSessions: (sessions: Session[]) => void,
  currentSession: Session | null
  setCurrentSession: (session: Session | null) => void
  currentExerciseIntensityLevel: null | IntensityLevel
  setCurrentExerciseIntensityLevel: (currentExerciceIntensityLevel: null | IntensityLevel) => void
  userSettings: UserSettings
  setUserSettings: (userSettings: UserSettings) => void
}

type ImmerStateCreator<T> = StateCreator<
  T,
  [["zustand/immer", never], never],
  [],
  T
>;

const createSessionsSlice: ImmerStateCreator<SessionsSliceType> = (set) => ({
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
  userSettings: defaultUserSettings,
  setUserSettings: (userSettings) => {
    set(state => {
      state.userSettings = userSettings
    })
  },
})

const useBoundedStore = create<SessionsSliceType>()(
  immer((...a) => ({
    ...createSessionsSlice(...a),
  })))

export default useBoundedStore