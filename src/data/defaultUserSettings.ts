import type { UserSettings, AsyncStorageType } from "../types"

export const defaultUserSettings: UserSettings = {
  vibrationsEnabled: true,
  vibrationPattern: [0, 400, 80, 400]
}

export const defaultStorageData: AsyncStorageType = {
  userSettings: { ...defaultUserSettings }
}