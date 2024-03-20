import { MaterialIcons } from "@expo/vector-icons"
import TextWithCustomFont from "@shared/TextWithCustomFont/TextWithCustomFont";
import * as React from "react"
import { View } from "react-native";
import { useStyles } from "react-native-unistyles";

import { styles as styleSheet } from "./iterations.styles";

interface Props {
  blockIterationsCount: number
  currentBlockIterations: number
}

function Iterations({ blockIterationsCount, currentBlockIterations }: Props) {
  const { styles } = useStyles(styleSheet)

  if (currentBlockIterations === 1) {
    return null
  }

  return (
    <View style={styles.container}>
      <MaterialIcons
        name="loop"
        size={120}
        style={styles.icon}
      />
      <TextWithCustomFont style={styles.text}>
        {blockIterationsCount}/{currentBlockIterations}
      </TextWithCustomFont>
    </View>
  );
}

export default Iterations;