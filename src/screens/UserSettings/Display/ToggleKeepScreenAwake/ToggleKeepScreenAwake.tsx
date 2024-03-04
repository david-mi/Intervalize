import * as React from "react"

import Checkbox from "@/components/Checkbox/Checkbox";
import type { UserSettings } from "@/types";

interface Props {
  updateUserSettings: <K extends keyof UserSettings>(settingName: K, settingValue: UserSettings[K]) => Promise<void>
  userSettings: UserSettings
}

function ToggleKeepScreenAwake({ updateUserSettings, userSettings }: Props) {

  async function onPress(checked: boolean) {
    updateUserSettings("toggleKeepScreenAwake", checked)
  }

  return (
    <Checkbox
      isChecked={userSettings.toggleKeepScreenAwake}
      onPress={onPress}
      text="Maintenir l'écran allumé"
    />
  );
}

export default ToggleKeepScreenAwake;