import * as React from "react"
import { View, Text } from "react-native"
import { useSteps } from "../../../hooks/useSteps";

function StepTimer() {
  const {
    currentStepName,
    remainingCurrentStepMinutes,
    remainingCurrentStepSeconds
  } = useSteps()

  return (
    <View>
      <Text>{currentStepName}</Text>
      <Text>{remainingCurrentStepMinutes}:</Text>
      <Text>{remainingCurrentStepSeconds}</Text>
    </View>
  );
}

export default StepTimer;