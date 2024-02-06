import * as React from "react"
import { View, Text } from "react-native"
import { useBlocks } from "../../../../hooks/useBlocks";
import CurrentExercise from "./CurrentExercise/CurrentExercise";
import Repetitions from "./Repetitions/Repetitions";
import { styles } from "./currentBlock.styles";

function CurrentBlock() {
  const {
    currentBlock,
    remainingCurrentBlockRepetitions,
    currentExerciseName,
    formattedRemainingCurrentExerciseTime,
  } = useBlocks()

  return (
    <View style={styles.container}>
      <Repetitions
        currentBlockRepetitions={currentBlock.repetitions}
        remainingCurrentBlockRepetitions={remainingCurrentBlockRepetitions}
      />
      <CurrentExercise
        currentExerciseName={currentExerciseName}
        formattedRemainingCurrentExerciseTime={formattedRemainingCurrentExerciseTime}
      />
    </View>
  );
}

export default CurrentBlock;