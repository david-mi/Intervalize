import * as React from "react"
import { SessionStatus, Session } from "../types";
import { mockSessions } from "../mocks";

interface GlobalContextType {
  sessionStatus: SessionStatus,
  setSessionStatus: React.Dispatch<React.SetStateAction<SessionStatus>>
  sessions: Session[]
  setSessions: React.Dispatch<React.SetStateAction<Session[]>>
  currentSession: Session
  setCurrentSession: React.Dispatch<React.SetStateAction<Session>>
}

export const GlobalContext = React.createContext<GlobalContextType>({
  sessionStatus: "STARTED",
  setSessionStatus: () => { },
  sessions: mockSessions,
  setSessions: () => { },
  currentSession: mockSessions[0],
  setCurrentSession: () => { }
})

interface Props {
  children: React.ReactNode
}

const GlobalContextProvider = ({ children }: Props) => {
  const [sessionStatus, setSessionStatus] = React.useState<SessionStatus>("STARTED")
  const [sessions, setSessions] = React.useState<Session[]>(mockSessions)
  const [currentSession, setCurrentSession] = React.useState<Session>(sessions[0])

  return (
    <GlobalContext.Provider value={{
      sessionStatus,
      setSessionStatus,
      sessions,
      setSessions,
      currentSession,
      setCurrentSession
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider