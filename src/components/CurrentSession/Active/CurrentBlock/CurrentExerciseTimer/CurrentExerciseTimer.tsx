import * as React from "react"
import { View } from "react-native"
import Timer from "../../../Timer/Timer"
import { styles } from "./currentExercise.styles"

interface Props {
  formattedRemainingCurrentExerciseTime: {
    minutes: string
    seconds: string
  }
}

function CurrentExerciseTimer({ formattedRemainingCurrentExerciseTime }: Props) {
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

export default CurrentExerciseTimer;