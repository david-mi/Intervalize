import SessionTimer from "./SessionTimer/SessionTimer";
import CurrentBlock from "./CurrentBlock/CurrentBlock";
import { View } from "react-native";
import { styles } from "./active.styles";
import Controls from "./CurrentBlock/CurrentExercise/Controls/Controls";

function Active() {
  return (
    <View style={styles.container}>
      <SessionTimer />
      <CurrentBlock />
      <Controls />
    </View>
  );
}

export default Active;