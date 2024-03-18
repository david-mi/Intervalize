import Timer from "@shared/Timer/Timer"
import * as React from "react"
import { View } from "react-native"
import { useStyles } from "react-native-unistyles"

import { styles as styleSheet } from "./currentExercise.styles"

interface Props {
  formattedRemainingCurrentExerciseTime: {
    minutes: string
    seconds: string
  }
}

function CurrentExerciseTimer({ formattedRemainingCurrentExerciseTime }: Props) {
  const { styles } = useStyles(styleSheet)

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