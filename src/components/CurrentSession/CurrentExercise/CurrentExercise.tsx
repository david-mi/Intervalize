import * as React from "react"
import { View, Text } from "react-native"
import { Exercise } from "../../../types";

interface Props {
  formattedRemainingCurrentExerciseTime: {
    minutes: string
    seconds: string
  }
  currentExerciseName: string
}

function CurrentExercise({ formattedRemainingCurrentExerciseTime, currentExerciseName }: Props) {
  return (
    <View>
      <Text>{currentExerciseName}</Text>
      <Text>{formattedRemainingCurrentExerciseTime.minutes}:</Text>
      <Text>{formattedRemainingCurrentExerciseTime.seconds}</Text>
    </View>
  );
}

export default CurrentExercise;