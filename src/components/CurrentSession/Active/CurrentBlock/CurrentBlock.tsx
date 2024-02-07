import * as React from "react"
import { View } from "react-native"
import { useBlocks } from "../../../../hooks/useBlocks";
import CurrentExerciseTimer from "./CurrentExerciseTimer/CurrentExerciseTimer";
import Repetitions from "./Repetitions/Repetitions";
import { styles } from "./currentBlock.styles";
import ExercisesList from "./ExercisesList/ExercisesList";

function CurrentBlock() {
  const {
    currentBlock,
    remainingCurrentBlockRepetitions,
    currentExerciseName,
    formattedRemainingCurrentExerciseTime,
    currentExerciseIndex
  } = useBlocks()

  return (
    <View style={styles.container}>
      <Repetitions
        currentBlockRepetitions={currentBlock.repetitions}
        remainingCurrentBlockRepetitions={remainingCurrentBlockRepetitions}
      />
      <ExercisesList
        currentExerciseName={currentExerciseName}
        currentExerciseIndex={currentExerciseIndex}
        exercises={currentBlock.exercises}
      />
      <CurrentExerciseTimer formattedRemainingCurrentExerciseTime={formattedRemainingCurrentExerciseTime} />
    </View>
  );
}

export default CurrentBlock;