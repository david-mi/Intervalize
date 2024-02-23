import * as React from "react"
import { View } from "react-native"

import CurrentExerciseTimer from "./CurrentExerciseTimer/CurrentExerciseTimer";
import ExercisesList from "./ExercisesList/ExercisesList";
import Iterations from "./Iterations/Iterations";
import { styles } from "./currentBlock.styles";

import { useBlocks } from "@/hooks/useBlocks";

function CurrentBlock() {
  const {
    currentBlock,
    blockIterationsCount,
    currentExercise,
    formattedRemainingCurrentExerciseTime,
  } = useBlocks()

  return (
    <View style={styles.container}>
      <Iterations blockIterationsCount={blockIterationsCount} currentBlockIterations={currentBlock.iterations} />
      <ExercisesList currentExercise={currentExercise} exercises={currentBlock.exercises} />
      <CurrentExerciseTimer formattedRemainingCurrentExerciseTime={formattedRemainingCurrentExerciseTime} />
    </View>
  );
}

export default CurrentBlock;