import type { UserSettings, StorageType } from "../types"

export const defaultVibrationsPattern = [0, 400, 80, 400]

export const defaultUserSettings: UserSettings = {
  vibrationsEnabled: true,
  vibrationPattern: defaultVibrationsPattern,
  intensityColors: {
    HARD: "#db222a",
    MEDIUM: "#FF9800",
    LOW: "#82CD47",
  },
  intensityColorsEnabled: true,
  toggleKeepScreenAwake: false,
}

export const defaultStorageData: StorageType = {
  userSettings: { ...defaultUserSettings },
}