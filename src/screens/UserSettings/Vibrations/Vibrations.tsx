import * as React from "react";
import { View } from "react-native";

import SetVibrationPattern from "./SetVibrationsPattern/SetVibrationPattern";
import ToggleVibrations from "./ToggleVibrations/ToggleVibrations";
import { styles } from "./vibrations.styles";

import useBoundedStore from "@/store/store";

function Vibrations() {
  const userSettings = useBoundedStore((state) => state.userSettings)
  const updateUserSettings = useBoundedStore((state) => state.updateUserSettings)

  return (
    <View style={styles.container}>
      <ToggleVibrations
        updateUserSettings={updateUserSettings}
        userSettings={userSettings}
      />
      {userSettings.vibrationsEnabled && (
        <SetVibrationPattern
          updateUserSettings={updateUserSettings}
          userSettings={userSettings}
        />
      )}
    </View>
  );
};

export default Vibrations