import * as React from "react"
import { UserSettings } from "@/types";
import { useUserSettings } from "@/hooks/useUserSettings";

interface UserSettingsContextType {
  updateError: Error | null,
  setUpdateError: React.Dispatch<React.SetStateAction<Error | null>>
  updateUserSettings: <K extends keyof UserSettings>(settingName: K, settingValue: UserSettings[K]) => Promise<void>
}

export const UserSettingsContext = React.createContext<UserSettingsContextType>({
  updateError: null,
  setUpdateError: () => { },
  updateUserSettings: () => Promise.resolve(),

})

interface Props {
  children: React.ReactNode
}

const UserSettingsContextProvider = ({ children }: Props) => {
  const { setUpdateError, updateError, updateUserSettings } = useUserSettings()

  return (
    <UserSettingsContext.Provider value={{
      updateError,
      updateUserSettings,
      setUpdateError
    }}>
      {children}
    </UserSettingsContext.Provider>
  )
}

export default UserSettingsContextProvider