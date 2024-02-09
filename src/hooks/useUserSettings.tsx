import * as React from "react"
import type { UserSettings } from "../types"
import { useContext } from "react"
import { GlobalContext } from "@/context/GlobalContext"

export type UseUserSettingsReturnType = UserSettings & {
  updateUserSettings: <K extends keyof UserSettings>(settingName: K, settingValue: UserSettings[K]) => Promise<void>
  updateError: Error | null
  setUpdateError: React.Dispatch<React.SetStateAction<Error>>
}

export function useUserSettings(): UseUserSettingsReturnType {
  const { userSettings, setUserSettings } = useContext(GlobalContext)
  const [updateError, setUpdateError] = React.useState<Error | null>(null)

  const updateUserSettings = React.useCallback(async <K extends keyof UserSettings>(settingName: K, settingValue: UserSettings[K]) => {
    try {
      const newSettings = {
        ...userSettings,
        [settingName]: settingValue
      }

      setUserSettings(newSettings)
      await updateStorageUserSettings(newSettings)
    }
    catch (error) {
      setUpdateError((error as Error) || new Error("Une erreur est survenue"))
    }
  }, [])

  const updateStorageUserSettings = React.useCallback(async (newUserSettings: UserSettings) => {
  }, [])

  return {
    updateUserSettings,
    updateError,
    setUpdateError,
    ...userSettings
  }
}