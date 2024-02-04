import * as React from "react"
import { useExerciseTimer } from "./useExercisesTimer"
import { Block } from "../types"

interface Props {
  currentBlock: Block
  onFinishedExercises: () => void
}

export function useExercises({ currentBlock, onFinishedExercises }: Props) {
  const currentExerciseIndexRef = React.useRef(0)
  const { formattedRemainingCurrentExerciseTime, setCurrentExerciseTimer } = useExerciseTimer({
    duration: currentBlock.exercises[currentExerciseIndexRef.current].duration,
    onFinishedExerciseTimer
  })
  const [remainingCurrentBlockRepetitions, setRemainingCurrentBlockRepetitions] = React.useState(currentBlock.repetitions)

  React.useEffect(() => {
    currentExerciseIndexRef.current = 0
    setRemainingCurrentBlockRepetitions(currentBlock.repetitions)
    setCurrentExerciseTimer(currentBlock.exercises[currentExerciseIndexRef.current].duration)
  }, [currentBlock])

  function onFinishedExerciseTimer() {
    const nextExerciseIndex = currentExerciseIndexRef.current + 1
    const nextExercise = currentBlock.exercises[nextExerciseIndex]

    if (!nextExercise) {
      if (remainingCurrentBlockRepetitions > 1) {
        setRemainingCurrentBlockRepetitions(remainingCurrentBlockRepetitions => remainingCurrentBlockRepetitions - 1)
        setCurrentExerciseTimer(currentBlock.exercises[currentExerciseIndexRef.current].duration)
      } else {
        onFinishedExercises()
      }
    } else {
      currentExerciseIndexRef.current += 1
      setCurrentExerciseTimer(nextExercise.duration)
    }
  }

  return {
    currentExerciseName: currentBlock.exercises[currentExerciseIndexRef.current].name,
    formattedRemainingCurrentExerciseTime,
    remainingCurrentBlockRepetitions,
    setRemainingCurrentBlockRepetitions
  }
}