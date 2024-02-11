import type { UserSettings, AsyncStorageType } from "../types"

export const defaultVibrationsPattern = [0, 400, 80, 400]

export const defaultUserSettings: UserSettings = {
  vibrationsEnabled: true,
  vibrationPattern: defaultVibrationsPattern,
}

export const defaultStorageData: AsyncStorageType = {
  userSettings: { ...defaultUserSettings },
}