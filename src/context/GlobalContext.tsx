import * as React from "react"
import { SessionStatus, Session, IntensityLevel, UserSettings } from "@/types";
import { mockSessions } from "@/mocks";
import { defaultUserSettings } from "../data/defaultUserSettings";
import { storageService } from "@/services/Storage/Storage";

interface GlobalContextType {
  sessionStatus: SessionStatus,
  setSessionStatus: React.Dispatch<React.SetStateAction<SessionStatus>>
  sessions: Session[]
  setSessions: React.Dispatch<React.SetStateAction<Session[]>>
  currentSession: Session | null
  setCurrentSession: React.Dispatch<React.SetStateAction<Session | null>>
  currentExerciseIntensityLevel: null | IntensityLevel
  setCurrentExerciseIntensityLevel: React.Dispatch<React.SetStateAction<null | IntensityLevel>>
  userSettings: UserSettings
  setUserSettings: React.Dispatch<React.SetStateAction<UserSettings>>
}

export const GlobalContext = React.createContext<GlobalContextType>({
  sessionStatus: "READY_TO_START",
  setSessionStatus: () => { },
  sessions: mockSessions,
  setSessions: () => { },
  currentSession: null,
  setCurrentSession: () => { },
  currentExerciseIntensityLevel: null,
  setCurrentExerciseIntensityLevel: () => { },
  userSettings: defaultUserSettings,
  setUserSettings: () => { }
})

interface Props {
  children: React.ReactNode
}

const GlobalContextProvider = ({ children }: Props) => {
  const [sessionStatus, setSessionStatus] = React.useState<SessionStatus>("NOT_SELECTED")
  const [sessions, setSessions] = React.useState<Session[]>(mockSessions)
  const [currentSession, setCurrentSession] = React.useState<Session | null>(null)
  const [currentExerciseIntensityLevel, setCurrentExerciseIntensityLevel] = React.useState<null | IntensityLevel>(null)
  const [userSettings, setUserSettings] = React.useState<UserSettings>(defaultUserSettings)

  React.useEffect(() => {
    async function loadUserSettings() {
      try {
        const userSettingsFromStorage = await storageService.getData("userSettings")
        if (userSettings === null) {
          await storageService.setData("userSettings", defaultUserSettings)
        }
        setUserSettings(userSettingsFromStorage)
      }
      catch (error) {
        console.error(error)
      }
    }

    loadUserSettings()
  }, [])

  return (
    <GlobalContext.Provider value={{
      sessionStatus,
      setSessionStatus,
      sessions,
      setSessions,
      currentSession,
      setCurrentSession,
      currentExerciseIntensityLevel,
      setCurrentExerciseIntensityLevel,
      userSettings,
      setUserSettings
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider