import * as React from "react"
import { SessionStatus, Session } from "../types";
import { mockSession } from "../mocks";

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
  sessions: [mockSession],
  setSessions: () => { },
  currentSession: mockSession,
  setCurrentSession: () => { }
})

interface Props {
  children: React.ReactNode
}

const GlobalContextProvider = ({ children }: Props) => {
  const [sessionStatus, setSessionStatus] = React.useState<SessionStatus>("STARTED")
  const [sessions, setSessions] = React.useState<Session[]>([mockSession])
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