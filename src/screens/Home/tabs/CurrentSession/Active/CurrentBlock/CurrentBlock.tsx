import * as React from "react"
import { View } from "react-native"
import { useBlocks } from "@/hooks/useBlocks";
import CurrentExerciseTimer from "./CurrentExerciseTimer/CurrentExerciseTimer";
import Iterations from "./Iterations/Iterations";
import { styles } from "./currentBlock.styles";
import ExercisesList from "./ExercisesList/ExercisesList";

function CurrentBlock() {
  const {
    currentBlock,
    blockIterationsCount,
    currentExercise,
    formattedRemainingCurrentExerciseTime,
  } = useBlocks()

  return (
    <View style={styles.container}>
      <Iterations currentBlockIterations={currentBlock.iterations} blockIterationsCount={blockIterationsCount} />
      <ExercisesList currentExercise={currentExercise} exercises={currentBlock.exercises} />
      <CurrentExerciseTimer formattedRemainingCurrentExerciseTime={formattedRemainingCurrentExerciseTime} />
    </View>
  );
}

export default CurrentBlock;