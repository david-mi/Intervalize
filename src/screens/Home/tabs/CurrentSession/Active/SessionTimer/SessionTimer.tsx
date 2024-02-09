import * as React from "react"
import { View } from "react-native"
import { useSessionTimer } from "@/hooks/useSessionTimer"
import Timer from "@/components/Timer/Timer"
import { styles } from "./sessionTimer.styles"

function SessionTimer() {
  const { remainingMinutes, remainingSeconds } = useSessionTimer()

  return (
    <View style={styles.container}>
      <Timer
        size={"medium"}
        minutes={remainingMinutes}
        seconds={remainingSeconds}
      />
    </View>
  );
}

export default SessionTimer;