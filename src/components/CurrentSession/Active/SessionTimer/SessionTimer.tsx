import * as React from "react"
import { View } from "react-native"
import { useSessionTimer } from "../../../../hooks/useSessionTimer"
import Timer from "../../Timer/Timer"
import { styles } from "./sessionTimer.styles"
import TextWithCustomFont from "../../../TextWithCustomFont/TextWithCustomFont"

function SessionTimer() {
  const { remainingMinutes, remainingSeconds } = useSessionTimer()

  return (
    <View style={styles.container}>
      <TextWithCustomFont fontFamily="oswald-bold" style={styles.title}>Temps restant</TextWithCustomFont>
      <Timer size={"medium"} minutes={remainingMinutes} seconds={remainingSeconds} />
    </View>
  );
}

export default SessionTimer;