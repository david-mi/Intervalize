import * as React from "react"
import { View, Text } from "react-native"
import { useExercises } from "../../../hooks/useExercises";

function CurrentExercise() {
  const { currentExerciseName, formattedRemainingCurrentExerciseTime } = useExercises()

  return (
    <View>
      <Text>{currentExerciseName}</Text>
      <Text>{formattedRemainingCurrentExerciseTime.minutes}:</Text>
      <Text>{formattedRemainingCurrentExerciseTime.seconds}</Text>
    </View>
  );
}

export default CurrentExercise;