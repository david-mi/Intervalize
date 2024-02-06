import { View } from "react-native";
import TextWithCustomFont from "../../../../TextWithCustomFont/TextWithCustomFont";
import { styles } from "./repetitions.styles";
import { MaterialIcons } from '@expo/vector-icons'

interface Props {
  remainingCurrentBlockRepetitions: number
  currentBlockRepetitions: number
}

function Repetitions({ remainingCurrentBlockRepetitions, currentBlockRepetitions }: Props) {
  return (
    <View style={styles.container}>
      <MaterialIcons name="loop" size={120} color="black" style={styles.icon} />
      <TextWithCustomFont style={styles.text}>
        {remainingCurrentBlockRepetitions}/{currentBlockRepetitions}
      </TextWithCustomFont>
    </View>
  );
}

export default Repetitions;