import useBoundedStore from "@store/store"
import * as React from "react"
import { Vibration } from "react-native"
import { useShallow } from "zustand/react/shallow"

import { useExerciseTimer } from "./useExercisesTimer"

import type { BlockType } from "@/types"

export function useBlocks() {
  const { setSessionStatus, currentSession, setCurrentExerciseIntensityLevel, userSettings } = useBoundedStore(
    useShallow(({ setSessionStatus, currentSession, setCurrentExerciseIntensityLevel, userSettings }) => ({
      setSessionStatus,
      currentSession,
      setCurrentExerciseIntensityLevel,
      userSettings,
    })))

  const currentSessionBlocks = currentSession!.blocks

  const currentBlockIndexRef = React.useRef(0)
  const [currentBlock, setCurrentBlock] = React.useState(currentSessionBlocks[currentBlockIndexRef.current])

  const [blockIterationsCount, setBlockIterationsCount] = React.useState(1)
  const [currentExerciseIndex, setCurrentExerciseIndex] = React.useState(0)
  const currentExercise = currentBlock.exercises[currentExerciseIndex]
  const { formattedRemainingCurrentExerciseTime, setCurrentExerciseTimer } = useExerciseTimer({
    duration: currentExercise.duration,
    onFinishedExerciseTimer,
  })

  React.useEffect(() => {
    setCurrentExerciseIntensityLevel(currentExercise.intensityLevel)

    if (userSettings.vibrationsEnabled) {
      Vibration.vibrate(userSettings.vibrationPattern)

      return () => {
        Vibration.cancel()
      }
    }
  }, [currentExerciseIndex, currentBlock])

  function onFinishedBlockExercises() {
    const nextBlockIndex = currentBlockIndexRef.current + 1
    const nextBlock = currentSessionBlocks[nextBlockIndex]

    if (nextBlock) {
      switchToNextBlock(nextBlock)
    } else {
      setSessionStatus("FINISHED")
    }
  }

  function switchToNextBlock(nextBlock: BlockType) {
    currentBlockIndexRef.current += 1
    setCurrentExerciseIndex(0)
    setCurrentBlock(nextBlock)
    setBlockIterationsCount(1)
    setCurrentExerciseTimer(nextBlock.exercises[0].duration)
  }

  function restartCurrentBlock() {
    setCurrentExerciseIndex(0)
    setCurrentExerciseTimer(currentBlock.exercises[0].duration)
  }

  function onFinishedExerciseTimer() {
    const nextExerciseIndex = currentExerciseIndex + 1
    const nextExercise = currentBlock.exercises[nextExerciseIndex]

    if (!nextExercise) {
      if (blockIterationsCount < currentBlock.iterations) {
        setBlockIterationsCount(blockIterationsCount => blockIterationsCount + 1)
        restartCurrentBlock()
      } else {
        onFinishedBlockExercises()
      }
    } else {
      setCurrentExerciseIndex(currentExerciseIndex => currentExerciseIndex + 1)
      setCurrentExerciseTimer(nextExercise.duration)
    }
  }

  return {
    currentExerciseIndex,
    currentBlock,
    currentExercise,
    formattedRemainingCurrentExerciseTime,
    blockIterationsCount,
  }
}