import { useContext } from "react";
import { View } from "react-native";

import CurrentBlock from "./CurrentBlock/CurrentBlock";
import SessionTimer from "./SessionTimer/SessionTimer";
import { styles } from "./active.styles";

import { GlobalContext } from "@/context/GlobalContext";

interface Props {
  children: JSX.Element
}

function Active({ children }: Props) {
  const { currentExerciseIntensityLevel, userSettings } = useContext(GlobalContext)

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