import Timer from "@shared/Timer/Timer"
import * as React from "react"
import { View } from "react-native"
import { useStyles } from "react-native-unistyles"

import { styles as styleSheet } from "./sessionTimer.styles"

import { useSessionTimer } from "@/hooks/useSessionTimer"

function SessionTimer() {
  const { styles } = useStyles(styleSheet)
  const { remainingMinutes, remainingSeconds } = useSessionTimer()

  return (
    <View style={styles.container}>
      <Timer
        minutes={remainingMinutes}
        seconds={remainingSeconds}
        size="medium"
      />
    </View>
  );
}

export default SessionTimer;