import * as React from "react"
import { Vibration } from "react-native";

import Checkbox from "@/components/Checkbox/Checkbox";
import type { UserSettings } from "@/types";

interface Props {
  updateUserSettings: <K extends keyof UserSettings>(settingName: K, settingValue: UserSettings[K]) => Promise<void>
  userSettings: UserSettings
}

function ToogleVibrations({ updateUserSettings, userSettings }: Props) {
  function onPress(checked: boolean) {
    if (checked) {
      Vibration.vibrate(userSettings.vibrationPattern)
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