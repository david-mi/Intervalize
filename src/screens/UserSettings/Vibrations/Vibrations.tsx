import * as React from "react";
import { View } from "react-native";

import SetVibrationPattern from "./SetVibrationsPattern/SetVibrationPattern";
import ToogleVibrations from "./ToogleVibrations/ToggleVibrations";
import { styles } from "./vibrations.styles";

import { GlobalContext } from "@/context/GlobalContext";
import { UserSettingsContext } from "@/context/UserSettingsContext";

function Vibrations() {
  const { updateUserSettings } = React.useContext(UserSettingsContext)
  const { userSettings } = React.useContext(GlobalContext)

  return (
    <View style={styles.container}>
      <ToogleVibrations
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