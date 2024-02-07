import { View } from "react-native";
import TextWithCustomFont from "../../../../TextWithCustomFont/TextWithCustomFont";
import { styles } from "./repetitions.styles";
import { MaterialIcons } from '@expo/vector-icons'
import * as React from "react"


interface Props {
  blockIterationsCount: number
  currentBlockIterations: number
}

function Repetitions({ blockIterationsCount, currentBlockIterations }: Props) {
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

export default Repetitions;