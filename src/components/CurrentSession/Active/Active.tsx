import useBoundedStore from "@store/store";
import { View } from "react-native";
import { useStyles } from "react-native-unistyles";

import CurrentBlock from "./CurrentBlock/CurrentBlock";
import SessionTimer from "./SessionTimer/SessionTimer";
import { styles as styleSheet } from "./active.styles";

interface Props {
  children: JSX.Element
}

function Active({ children }: Props) {
  const currentExerciseIntensityLevel = useBoundedStore((state) => state.currentExerciseIntensityLevel)
  const userSettings = useBoundedStore((state) => state.userSettings)
  const { styles } = useStyles(styleSheet)

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