import { MaterialIcons } from "@expo/vector-icons"
import TextWithCustomFont from "@shared/TextWithCustomFont/TextWithCustomFont";
import * as React from "react"
import { View } from "react-native";

import { styles } from "./iterations.styles";

interface Props {
  blockIterationsCount: number
  currentBlockIterations: number
}

function Iterations({ blockIterationsCount, currentBlockIterations }: Props) {
  if (currentBlockIterations === 1) {
    return null
  }

  return (
    <View style={styles.container}>
      <MaterialIcons
        color="black"
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