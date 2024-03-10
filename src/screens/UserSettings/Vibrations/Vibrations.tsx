import * as React from "react";
import { View } from "react-native";

import SetVibrationPattern from "./SetVibrationsPattern/SetVibrationPattern";
import ToggleVibrations from "./ToggleVibrations/ToggleVibrations";
import { styles } from "./vibrations.styles";

import { UserSettingsContext } from "@/context/UserSettingsContext";
import useBoundedStore from "@/store/store";

function Vibrations() {
  const { updateUserSettings } = React.useContext(UserSettingsContext)
  const { userSettings } = useBoundedStore()

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