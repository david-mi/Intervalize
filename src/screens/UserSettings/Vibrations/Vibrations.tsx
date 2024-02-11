import { View } from "react-native";

import ToogleVibrations from "./ToogleVibrations/ToggleVibrations";
import { styles } from "./vibrations.styles";

function Vibrations() {
  return (
    <View style={styles.container}>
      <ToogleVibrations />
    </View>
  );
};

export default Vibrations