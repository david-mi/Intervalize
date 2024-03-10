import { type StateCreator, create } from "zustand";
import { immer } from "zustand/middleware/immer"

import { defaultUserSettings } from "@/data/defaultUserSettings";
import { mockSessions } from "@/mocks";
import { storageService } from "@/services/Storage/Storage";
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
})

interface UserSettingsSliceType {
  userSettings: UserSettings
  updateUserSettings: <K extends keyof UserSettings>(settingName: K, settingValue: UserSettings[K]) => Promise<void>
  updateError: Error | null,
  setUpdateError: (updateError: Error | null) => void
}

const createUserSettingsSlice: ImmerStateCreator<UserSettingsSliceType> = (set, get) => ({
  userSettings: defaultUserSettings,
  updateUserSettings: async (userSettingKey, userSetting) => {
    set((state) => {
      state.userSettings[userSettingKey] = userSetting
    })
    await storageService.setData("userSettings", get().userSettings)
  },
  updateError: null,
  setUpdateError: (updateError) => {
    set(state => {
      state.updateError = updateError
    })
  },
})

const useBoundedStore = create<SessionsSliceType & UserSettingsSliceType>()(
  immer((...a) => ({
    ...createSessionsSlice(...a),
    ...createUserSettingsSlice(...a),
  })))

export default useBoundedStore