import Checkbox from "@shared/Checkbox/Checkbox";
import * as React from "react"
import { useTranslation } from "react-i18next";
import { Vibration } from "react-native";

import useBoundedStore from "@/store/store";

function ToggleVibrations() {
  const userSettings = useBoundedStore((state) => state.userSettings)
  const updateUserSettings = useBoundedStore((state) => state.updateUserSettings)
  const { t } = useTranslation()

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
      text={t("toggle")}
    />
  );
}

export default ToggleVibrations;