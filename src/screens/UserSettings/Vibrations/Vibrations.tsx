import { View } from "react-native";

import SetVibrationPattern from "./SetVibrationsPattern/SetVibrationPattern";
import ToogleVibrations from "./ToogleVibrations/ToggleVibrations";
import { styles } from "./vibrations.styles";

function Vibrations() {
  return (
    <View style={styles.container}>
      <ToogleVibrations />
      <SetVibrationPattern />
    </View>
  );
};

export default Vibrations