import type { ImmerStateCreator } from "../store"

import { defaultUserSettings } from "@/data/defaultUserSettings"
import type { UserSettings } from "@/types"

export interface UserSettingsSliceType {
  userSettings: UserSettings
  updateUserSettings: <K extends keyof UserSettings>(settingName: K, settingValue: UserSettings[K]) => void
  updateError: Error | null,
  setUpdateError: (updateError: Error | null) => void
}

export const createUserSettingsSlice: ImmerStateCreator<UserSettingsSliceType> = (set) => ({
  userSettings: defaultUserSettings,
  updateUserSettings: (userSettingKey, userSetting) => {
    set((state) => {
      state.userSettings[userSettingKey] = userSetting
    })
  },
  updateError: null,
  setUpdateError: (updateError) => {
    set(state => {
      state.updateError = updateError
    })
  },
})