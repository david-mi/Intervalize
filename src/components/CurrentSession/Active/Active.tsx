import { View } from "react-native";

import CurrentBlock from "./CurrentBlock/CurrentBlock";
import SessionTimer from "./SessionTimer/SessionTimer";
import { styles } from "./active.styles";

import useBoundedStore from "@store/store";

interface Props {
  children: JSX.Element
}

function Active({ children }: Props) {
  const currentExerciseIntensityLevel = useBoundedStore((state) => state.currentExerciseIntensityLevel)
  const userSettings = useBoundedStore((state) => state.userSettings)

  const backgroundColor = currentExerciseIntensityLevel
    ? userSettings.intensityColors[currentExerciseIntensityLevel]
    : "grey"

  const activeStyles = {
    ...styles.container,
    backgroundColor,
  }

  return (
    <View style={activeStyles}>
      <SessionTimer />
      <CurrentBlock />
      {children}
    </View>
  );
}

export default Active;