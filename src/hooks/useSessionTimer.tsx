import * as React from "react"
import { GlobalContext } from "@/context/GlobalContext"

export function useSessionTimer() {
  const { currentSession, sessionStatus } = React.useContext(GlobalContext)
  const currentSessionBlocks = currentSession!.blocks
  const timeoutIdRef = React.useRef<NodeJS.Timeout | null>(null)

  const sessionTimerInitialValue = React.useMemo(() => {
    let totalMinutes = 0
    let totalSeconds = 0

    currentSessionBlocks.forEach(({ exercises, iterations }) => {
      exercises.forEach(({ duration }) => {
        totalSeconds += duration.seconds * iterations
        totalSeconds += duration.minutes * 60 * iterations
      })
    })

    totalMinutes = Math.floor(totalSeconds / 60);
    totalSeconds %= 60;

    return {
      minutes: totalMinutes,
      seconds: totalSeconds
    }
  }, [])

  const [sessionTimer, setSessionTimer] = React.useState(sessionTimerInitialValue)

  React.useEffect(() => {
    if (sessionStatus === "PAUSED" && timeoutIdRef.current !== null) {
      return clearTimeout(timeoutIdRef.current)
    }

    timeoutIdRef.current = setTimeout(() => {
      if (sessionTimer.seconds <= 0) {
        if (sessionTimer.minutes <= 0) {
          clearTimeout(timeoutIdRef.current as NodeJS.Timeout)
        } else {
          setSessionTimer(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59
          }))
        }
      } else {
        setSessionTimer(({ minutes, seconds }) => ({
          minutes,
          seconds: seconds - 1
        }))
      }
    }, 1000)

    return () => {
      if (timeoutIdRef.current !== null) {
        clearTimeout(timeoutIdRef.current)
      }
    }
  }, [sessionTimer.seconds, sessionStatus])

  return {
    remainingMinutes: String(sessionTimer.minutes).padStart(2, "0"),
    remainingSeconds: String(sessionTimer.seconds).padStart(2, "0")
  }
}