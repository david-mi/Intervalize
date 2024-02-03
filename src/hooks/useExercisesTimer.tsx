import * as React from "react"
import { Exercise } from "../types"

export function useExerciseTimer(currentExerciseDuration: Exercise["duration"]) {
  const [finishedExerciseTrigger, setfinishedExerciseTrigger] = React.useState(false)
  const [currentExerciseTimer, setCurrentExerciseTimer] = React.useState(currentExerciseDuration)

  React.useEffect(() => {
    const intervalId = setTimeout(() => {
      if (currentExerciseTimer.seconds <= 0) {
        if (currentExerciseTimer.minutes <= 0) {
          setfinishedExerciseTrigger(finishedExerciseTrigger => !finishedExerciseTrigger)
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
    formattedRemainingCurrentExerciseMinutes: String(currentExerciseTimer.minutes).padStart(2, "0"),
    formattedRemainingCurrentExerciseSeconds: String(currentExerciseTimer.seconds).padStart(2, "0"),
    finishedExerciseTrigger
  }
}