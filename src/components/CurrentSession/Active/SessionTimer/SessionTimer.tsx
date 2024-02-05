import * as React from "react"
import { Text, View } from "react-native"
import { useSessionTimer } from "../../../../hooks/useSessionTimer"

function SessionTimer() {
  const { remainingMinutes, remainingSeconds } = useSessionTimer()

  return (
    <View>
      <Text>Temps restant</Text>
      <Text>{remainingMinutes}:</Text>
      <Text>{remainingSeconds}</Text>
    </View>
  );
}

export default SessionTimer;