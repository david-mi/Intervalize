import { View } from "react-native";
import { styles } from "./controls.styles";
import Stop from "./Stop/Stop";

function Controls() {
  return (
    <View style={styles.container}>
      <Stop />
    </View>
  );
}

export default Controls;