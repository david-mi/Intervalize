import { MaterialIcons } from "@expo/vector-icons"
import * as React from "react"
import { View } from "react-native";

import { styles } from "./iterations.styles";

import TextWithCustomFont from "@/components/TextWithCustomFont/TextWithCustomFont";

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
      <MaterialIcons name="loop" size={120} color="black" style={styles.icon} />
      <TextWithCustomFont style={styles.text}>
        {blockIterationsCount}/{currentBlockIterations}
      </TextWithCustomFont>
    </View>
  );
}

export default Iterations;