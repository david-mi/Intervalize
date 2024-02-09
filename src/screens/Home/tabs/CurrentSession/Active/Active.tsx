import SessionTimer from "./SessionTimer/SessionTimer";
import CurrentBlock from "./CurrentBlock/CurrentBlock";
import { View } from "react-native";
import { styles } from "./active.styles";
import { GlobalContext } from "@/context/GlobalContext";
import { useContext } from "react";
import { IntensityLevel } from "@/types";

interface Props {
  children: JSX.Element
}

function Active({ children }: Props) {
  const { currentExerciseIntensityLevel } = useContext(GlobalContext)

  const intensityLevelBackgroundColor: { [key in IntensityLevel]: string } = {
    HARD: "#db222a",
    MEDIUM: "#FF9800",
    LOW: "#82CD47"
  }

  const backgroundColor = currentExerciseIntensityLevel
    ? intensityLevelBackgroundColor[currentExerciseIntensityLevel]
    : "grey"

  const activeStyles = {
    ...styles.container,
    backgroundColor
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