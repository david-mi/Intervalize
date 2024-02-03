import * as React from "react"
import { GlobalContext } from "../context/GlobalContext"
import { useExerciseTimer } from "./useExercisesTimer"

export function useExercises() {
  const { setSessionStatus, currentSession } = React.useContext(GlobalContext)
  const currentExerciseIndexRef = React.useRef(0)
  const currentExercise = currentSession!.exercises[currentExerciseIndexRef.current]
  const { formattedRemainingCurrentExerciseTime, setCurrentExerciseTimer } = useExerciseTimer({
    duration: currentExercise.duration,
    onFinishedExerciceTimer
  })

  function onFinishedExerciceTimer() {
    const nextExerciseIndex = currentExerciseIndexRef.current + 1
    const nextExercise = currentSession!.exercises[nextExerciseIndex]

    if (!nextExercise) {
      setSessionStatus("FINISHED")
    } else {
      currentExerciseIndexRef.current += 1
      setCurrentExerciseTimer(nextExercise.duration)
    }
  }

  return {
    currentExerciseName: currentExercise.name,
    formattedRemainingCurrentExerciseTime
  }
}