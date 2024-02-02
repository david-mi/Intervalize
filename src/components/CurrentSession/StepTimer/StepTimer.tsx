import * as React from "react"
import { View, Text } from "react-native"
import { useStep } from "../../../hooks/useStepTimer";

function StepTimer() {
  const {
    currentStepName,
    remainingCurrentStepMinutes,
    remainingCurrentStepSeconds
  } = useStep()

  return (
    <View>
      <Text>{currentStepName}</Text>
      <Text>{remainingCurrentStepMinutes}:</Text>
      <Text>{remainingCurrentStepSeconds}</Text>
    </View>
  );
}

export default StepTimer;