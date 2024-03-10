import * as React from "react"

import type { UserSettings } from "../types"

import { storageService } from "@/services/Storage/Storage";
import useBoundedStore from "@/store/store"

export type UseUserSettingsReturnType = {
  updateUserSettings: <K extends keyof UserSettings>(settingName: K, settingValue: UserSettings[K]) => Promise<void>
  updateError: Error | null
  setUpdateError: React.Dispatch<React.SetStateAction<Error | null>>
}

export function useUserSettings(): UseUserSettingsReturnType {
  const { userSettings, setUserSettings } = useBoundedStore()
  const [updateError, setUpdateError] = React.useState<Error | null>(null)

  const updateUserSettings = React.useCallback(async <K extends keyof UserSettings>(settingName: K, settingValue: UserSettings[K]) => {
    try {
      const newSettings = {
        ...userSettings,
        [settingName]: settingValue,
      }

      setUserSettings(newSettings)
      await storageService.setData("userSettings", newSettings)
    }
    catch (error) {
      setUpdateError((error as Error) || new Error("Une erreur est survenue"))
    }
  }, [])

  return {
    updateUserSettings,
    updateError,
    setUpdateError,
  }
}