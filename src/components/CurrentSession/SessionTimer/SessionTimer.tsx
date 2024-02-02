import * as React from "react"
import { Text, View } from "react-native"
import { useSessionTimer } from "../../../hooks/useSessionTimer"

function SessionTimer() {
  const { elapsedMinutes, elapsedSeconds } = useSessionTimer()

  return (
    <View>
      <Text>Temps total</Text>
      <Text>{elapsedMinutes}:</Text>
      <Text>{elapsedSeconds}</Text>
    </View>
  );
}

export default SessionTimer;