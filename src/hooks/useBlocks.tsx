import * as React from "react"
import { GlobalContext } from "../context/GlobalContext"
import { useExerciseTimer } from "./useExercisesTimer"
import { Block } from "../types"

export function useBlocks() {
  const { setSessionStatus, currentSession } = React.useContext(GlobalContext)
  const currentSessionBlocks = currentSession!.blocks

  const currentBlockIndexRef = React.useRef(0)
  const [currentBlock, setCurrentBlock] = React.useState(currentSessionBlocks[currentBlockIndexRef.current])
  const [remainingCurrentBlockRepetitions, setRemainingCurrentBlockRepetitions] = React.useState(currentBlock.repetitions)

  const currentExerciseIndexRef = React.useRef(0)
  const { formattedRemainingCurrentExerciseTime, setCurrentExerciseTimer } = useExerciseTimer({
    duration: currentBlock.exercises[currentExerciseIndexRef.current].duration,
    onFinishedExerciseTimer
  })

  function onFinishedBlockExercises() {
    const nextBlockIndex = currentBlockIndexRef.current + 1
    const nextBlock = currentSessionBlocks[nextBlockIndex]

    if (nextBlock) {
      switchToNextBlock(nextBlock)
    } else {
      setSessionStatus("FINISHED")
    }
  }

  function switchToNextBlock(nextBlock: Block) {
    currentBlockIndexRef.current += 1
    currentExerciseIndexRef.current = 0
    setCurrentBlock(nextBlock)
    setRemainingCurrentBlockRepetitions(nextBlock.repetitions)
    setCurrentExerciseTimer(nextBlock.exercises[currentExerciseIndexRef.current].duration)
  }

  function restartCurrentBlock() {
    currentExerciseIndexRef.current = 0
    setCurrentExerciseTimer(currentBlock.exercises[currentExerciseIndexRef.current].duration)
  }

  function onFinishedExerciseTimer() {
    const nextExerciseIndex = currentExerciseIndexRef.current + 1
    const nextExercise = currentBlock.exercises[nextExerciseIndex]

    if (!nextExercise) {
      if (remainingCurrentBlockRepetitions > 1) {
        setRemainingCurrentBlockRepetitions(remainingCurrentBlockRepetitions => remainingCurrentBlockRepetitions - 1)
        restartCurrentBlock()
      } else {
        onFinishedBlockExercises()
      }
    } else {
      currentExerciseIndexRef.current += 1
      setCurrentExerciseTimer(nextExercise.duration)
    }
  }

  return {
    currentBlock,
    currentExerciseName: currentBlock.exercises[currentExerciseIndexRef.current].name,
    formattedRemainingCurrentExerciseTime,
    remainingCurrentBlockRepetitions,
  }
}