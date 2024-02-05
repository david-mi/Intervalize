import SessionTimer from "./SessionTimer/SessionTimer";
import CurrentBlock from "./CurrentBlock/CurrentBlock";
import { View } from "react-native";
import { styles } from "../currentSession.styles";

function Active() {
  return (
    <View style={styles.container}>
      <SessionTimer />
      <CurrentBlock />
    </View>
  );
}

export default Active;