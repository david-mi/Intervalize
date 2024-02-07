import * as React from "react"
import { View } from "react-native"
import Timer from "../../../Timer/Timer"
import TextWithCustomFont from "../../../../TextWithCustomFont/TextWithCustomFont"
import { styles } from "./currentExercise.styles"

interface Props {
  formattedRemainingCurrentExerciseTime: {
    minutes: string
    seconds: string
  }
  currentExerciseName: string
}

function CurrentExercise({ formattedRemainingCurrentExerciseTime, currentExerciseName }: Props) {
  return (
    <View style={styles.container}>
      <Timer
        size={"big"}
        minutes={formattedRemainingCurrentExerciseTime.minutes}
        seconds={formattedRemainingCurrentExerciseTime.seconds}
      />
    </View>
  );
}

export default CurrentExercise;