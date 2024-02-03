import * as React from "react"
import { View, Text } from "react-native"
import { useExercises } from "../../../hooks/useExercises";

function CurrentExercise() {
  const {
    currentExerciseName,
    formattedRemainingCurrentExerciseMinutes,
    formattedRemainingCurrentExerciseSeconds
  } = useExercises()

  return (
    <View>
      <Text>{currentExerciseName}</Text>
      <Text>{formattedRemainingCurrentExerciseMinutes}:</Text>
      <Text>{formattedRemainingCurrentExerciseSeconds}</Text>
    </View>
  );
}

export default CurrentExercise;