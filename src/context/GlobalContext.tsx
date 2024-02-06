import * as React from "react"
import { SessionStatus, Session, IntensityLevel } from "../types";
import { mockSessions } from "../mocks";

interface GlobalContextType {
  sessionStatus: SessionStatus,
  setSessionStatus: React.Dispatch<React.SetStateAction<SessionStatus>>
  sessions: Session[]
  setSessions: React.Dispatch<React.SetStateAction<Session[]>>
  currentSession: Session | null
  setCurrentSession: React.Dispatch<React.SetStateAction<Session | null>>
  currentExerciseIntensityLevel: null | IntensityLevel
  setCurrentExerciseIntensityLevel: React.Dispatch<React.SetStateAction<null | IntensityLevel>>
}

export const GlobalContext = React.createContext<GlobalContextType>({
  sessionStatus: "READY_TO_START",
  setSessionStatus: () => { },
  sessions: mockSessions,
  setSessions: () => { },
  currentSession: null,
  setCurrentSession: () => { },
  currentExerciseIntensityLevel: null,
  setCurrentExerciseIntensityLevel: () => { }
})

interface Props {
  children: React.ReactNode
}

const GlobalContextProvider = ({ children }: Props) => {
  const [sessionStatus, setSessionStatus] = React.useState<SessionStatus>("NOT_SELECTED")
  const [sessions, setSessions] = React.useState<Session[]>(mockSessions)
  const [currentSession, setCurrentSession] = React.useState<Session | null>(null)
  const [currentExerciseIntensityLevel, setCurrentExerciseIntensityLevel] = React.useState<null | IntensityLevel>(null)

  return (
    <GlobalContext.Provider value={{
      sessionStatus,
      setSessionStatus,
      sessions,
      setSessions,
      currentSession,
      setCurrentSession,
      currentExerciseIntensityLevel,
      setCurrentExerciseIntensityLevel
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider