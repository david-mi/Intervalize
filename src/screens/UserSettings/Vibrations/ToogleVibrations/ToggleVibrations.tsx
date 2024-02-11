import * as React from "react"
import { Vibration } from "react-native";

import Checkbox from "@/components/Checkbox/Checkbox";
import { GlobalContext } from "@/context/GlobalContext";
import { UserSettingsContext } from "@/context/UserSettingsContext";

function ToogleVibrations() {
  const { updateUserSettings } = React.useContext(UserSettingsContext)
  const { userSettings } = React.useContext(GlobalContext)

  function onPress(checked: boolean) {
    const vibrationPattern = [0, 400, 80, 400]

    if (checked) {
      Vibration.vibrate(vibrationPattern)
    }

    updateUserSettings("vibrationsEnabled", checked)
  }

  return (
    <Checkbox
      text="Activer"
      isChecked={userSettings.vibrationsEnabled}
      onPress={onPress}
    />
  );
}

export default ToogleVibrations;