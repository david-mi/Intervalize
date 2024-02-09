import * as React from "react"
import type { UserSettings } from "../types"
import { useContext } from "react"
import { GlobalContext } from "@/context/GlobalContext"

export interface UseUserSettingsReturnType {
  updateUserSettings: <K extends keyof UserSettings>(settingName: K, settingValue: UserSettings[K]) => Promise<void>
  errorMessage: string | null
}

export function useUserSettings(): UseUserSettingsReturnType {
  const { userSettings, setUserSettings } = useContext(GlobalContext)
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null)

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
      setErrorMessage((error as Error)?.message || "Une erreur est survenue")
    }
  }, [])

  const updateStorageUserSettings = React.useCallback(async (newUserSettings: UserSettings) => {
  }, [])

  return { updateUserSettings, errorMessage }
}