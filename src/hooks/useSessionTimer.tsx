import * as React from "react"
import { GlobalContext } from "../context/GlobalContext"

export function useSessionTimer() {
  const { currentSession } = React.useContext(GlobalContext)
  const currentSessionBlocks = currentSession!.blocks

  const sessionTimerInitialValue = React.useMemo(() => {
    let totalMinutes = 0
    let totalSeconds = 0

    currentSessionBlocks.forEach(({ exercises, repetitions }) => {
      exercises.forEach(({ duration }) => {
        totalSeconds += duration.seconds * repetitions
        totalSeconds += duration.minutes * 60 * repetitions
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
    const intervalId = setTimeout(() => {
      if (sessionTimer.seconds <= 0) {
        if (sessionTimer.minutes <= 0) {
          clearTimeout(intervalId)
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
      clearTimeout(intervalId)
    }
  }, [sessionTimer.seconds])

  return {
    remainingMinutes: String(sessionTimer.minutes).padStart(2, "0"),
    remainingSeconds: String(sessionTimer.seconds).padStart(2, "0")
  }
}