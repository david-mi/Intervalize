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
        userSettings={userSettings}
        updateUserSettings={updateUserSettings}
      />
      {userSettings.vibrationsEnabled && (
        <SetVibrationPattern
          userSettings={userSettings}
          updateUserSettings={updateUserSettings}
        />
      )}
    </View>
  );
};

export default Vibrations