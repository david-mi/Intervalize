import * as React from "react"
import { View } from "react-native"

import { styles } from "./currentExercise.styles"

import Timer from "@/components/Timer/Timer"

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
        minutes={formattedRemainingCurrentExerciseTime.minutes}
        seconds={formattedRemainingCurrentExerciseTime.seconds}
        size="big"
      />
    </View>
  );
}

export default CurrentExerciseTimer;