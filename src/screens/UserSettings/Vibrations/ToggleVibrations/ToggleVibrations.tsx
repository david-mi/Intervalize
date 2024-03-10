import * as React from "react"
import { Vibration } from "react-native";

import Checkbox from "@/components/Checkbox/Checkbox";
import useBoundedStore from "@/store/store";

function ToggleVibrations() {
  const userSettings = useBoundedStore((state) => state.userSettings)
  const updateUserSettings = useBoundedStore((state) => state.updateUserSettings)

  function onPress(checked: boolean) {
    if (checked) {
      Vibration.vibrate(userSettings.vibrationPattern)
    }

    updateUserSettings("vibrationsEnabled", checked)
  }

  return (
    <Checkbox
      isChecked={userSettings.vibrationsEnabled}
      onPress={onPress}
      text="Activer"
    />
  );
}

export default ToggleVibrations;