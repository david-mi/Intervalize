import useBoundedStore from "@store/store";
import * as React from "react";
import { View } from "react-native";
import { useStyles } from "react-native-unistyles";

import SetVibrationPattern from "./SetVibrationsPattern/SetVibrationPattern";
import ToggleVibrations from "./ToggleVibrations/ToggleVibrations";
import { styles as styleSheet } from "./vibrations.styles";

function Vibrations() {
  const vibrationsEnabled = useBoundedStore(({ userSettings }) => userSettings.vibrationsEnabled)
  const { styles } = useStyles(styleSheet)

  return (
    <View style={styles.container}>
      <ToggleVibrations />
      {vibrationsEnabled && <SetVibrationPattern />}
    </View>
  );
};

export default Vibrations