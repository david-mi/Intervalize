import * as React from "react"
import { View, Text } from "react-native"
import { useBlocks } from "../../../../hooks/useBlocks";
import CurrentExercise from "../../CurrentExercise/CurrentExercise";
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
      <View>
        <Text>Répétitions : {remainingCurrentBlockRepetitions}/{currentBlock.repetitions}</Text>
      </View>
      <CurrentExercise
        currentExerciseName={currentExerciseName}
        formattedRemainingCurrentExerciseTime={formattedRemainingCurrentExerciseTime}
      />
    </View>
  );
}

export default CurrentBlock;