import SessionTimer from "./SessionTimer/SessionTimer";
import CurrentBlock from "./CurrentBlock/CurrentBlock";
import { View } from "react-native";
import { styles } from "./active.styles";

interface Props {
  children: JSX.Element
}

function Active({ children }: Props) {
  return (
    <View style={styles.container}>
      <SessionTimer />
      <CurrentBlock />
      {children}
    </View>
  );
}

export default Active;