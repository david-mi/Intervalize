import type { UserSettings, StorageType } from "../types"

export const defaultVibrationsPattern = [0, 400, 80, 400]

export const defaultUserSettings: UserSettings = {
  vibrationsEnabled: true,
  vibrationPattern: defaultVibrationsPattern,
  intensityColors: {
    LOW: "#82CD47",
    MEDIUM: "#FF9800",
    HIGH: "#db222a",
  },
  intensityColorsEnabled: true,
  toggleKeepScreenAwake: false,
  theme: "adaptative",
}

export const defaultStorageData: StorageType = {
  userSettings: { ...defaultUserSettings },
}