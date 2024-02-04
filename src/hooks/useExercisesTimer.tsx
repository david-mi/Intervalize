import * as React from "react"
import { Exercise } from "../types"

interface Props {
  duration: Exercise["duration"]
  onFinishedExerciseTimer: () => void
}

export function useExerciseTimer({ duration, onFinishedExerciseTimer }: Props) {
  const [currentExerciseTimer, setCurrentExerciseTimer] = React.useState(duration)

  React.useEffect(() => {
    const intervalId = setTimeout(() => {
      if (currentExerciseTimer.seconds <= 0) {
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
      clearTimeout(intervalId)
    }
  }, [currentExerciseTimer.seconds])

  return {
    setCurrentExerciseTimer,
    formattedRemainingCurrentExerciseTime: {
      minutes: String(currentExerciseTimer.minutes).padStart(2, "0"),
      seconds: String(currentExerciseTimer.seconds).padStart(2, "0")
    }
  }
}