import * as React from "react"
import { Time } from "../types"
import { GlobalContext } from "../context/GlobalContext"

interface Props {
  duration: Time
  onFinishedExerciseTimer: () => void
}

export function useExerciseTimer({ duration, onFinishedExerciseTimer }: Props) {
  const [currentExerciseTimer, setCurrentExerciseTimer] = React.useState(duration)
  const { sessionStatus } = React.useContext(GlobalContext)
  const timeoutIdRef = React.useRef<NodeJS.Timeout | null>(null)

  React.useEffect(() => {
    if (sessionStatus === "PAUSED" && timeoutIdRef.current !== null) {
      return clearTimeout(timeoutIdRef.current)
    }

    timeoutIdRef.current = setTimeout(() => {
      if (currentExerciseTimer.seconds <= 1) {
        if (currentExerciseTimer.minutes <= 0) {
          onFinishedExerciseTimer()
        } else {
          setCurrentExerciseTimer(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59
          }))
        }

      } else {
        setCurrentExerciseTimer(({ minutes, seconds }) => ({
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
  }, [currentExerciseTimer.seconds, sessionStatus])

  return {
    setCurrentExerciseTimer,
    formattedRemainingCurrentExerciseTime: {
      minutes: String(currentExerciseTimer.minutes).padStart(2, "0"),
      seconds: String(currentExerciseTimer.seconds).padStart(2, "0")
    }
  }
}