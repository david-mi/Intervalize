import useBoundedStore from "@store/store";
import { View } from "react-native";

import CurrentBlock from "./CurrentBlock/CurrentBlock";
import SessionTimer from "./SessionTimer/SessionTimer";
import { styles } from "./active.styles";

interface Props {
  children: JSX.Element
}

function Active({ children }: Props) {
  const currentExerciseIntensityLevel = useBoundedStore((state) => state.currentExerciseIntensityLevel)
  const userSettings = useBoundedStore((state) => state.userSettings)

  const activeStyles = {
    ...styles.container,
    backgroundColor: userSettings.intensityColors[currentExerciseIntensityLevel!],
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