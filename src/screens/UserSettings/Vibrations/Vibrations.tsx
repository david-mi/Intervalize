import { View } from "react-native";
import { styles } from "./vibrations.styles";
import ToogleVibrations from "./ToogleVibrations/ToggleVibrations";

function Vibrations() {
  return (
    <View style={styles.container}>
      <ToogleVibrations />
    </View>
  );
};

export default Vibrations