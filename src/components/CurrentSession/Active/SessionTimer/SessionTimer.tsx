import * as React from "react"
import { View } from "react-native"

import { styles } from "./sessionTimer.styles"

import Timer from "@/components/Timer/Timer"
import { useSessionTimer } from "@/hooks/useSessionTimer"

function SessionTimer() {
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