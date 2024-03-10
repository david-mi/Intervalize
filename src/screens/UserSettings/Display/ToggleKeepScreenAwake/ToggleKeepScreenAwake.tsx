import * as React from "react"

import Checkbox from "@/components/Checkbox/Checkbox";
import useBoundedStore from "@/store/store";

function ToggleKeepScreenAwake() {
  const userSettings = useBoundedStore((state) => state.userSettings)
  const updateUserSettings = useBoundedStore((state) => state.updateUserSettings)

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