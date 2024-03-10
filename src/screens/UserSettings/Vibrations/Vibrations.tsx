import * as React from "react";
import { View } from "react-native";

import SetVibrationPattern from "./SetVibrationsPattern/SetVibrationPattern";
import ToggleVibrations from "./ToggleVibrations/ToggleVibrations";
import { styles } from "./vibrations.styles";

import useBoundedStore from "@/store/store";

function Vibrations() {
  const vibrationsEnabled = useBoundedStore(({ userSettings }) => userSettings.vibrationsEnabled)

  return (
    <View style={styles.container}>
      <ToggleVibrations />
      {vibrationsEnabled && <SetVibrationPattern />}
    </View>
  );
};

export default Vibrations