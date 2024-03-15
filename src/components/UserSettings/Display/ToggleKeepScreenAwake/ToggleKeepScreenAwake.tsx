import Checkbox from "@shared/Checkbox/Checkbox";
import * as React from "react"
import { useTranslation } from "react-i18next";

import useBoundedStore from "@store/store";

function ToggleKeepScreenAwake() {
  const userSettings = useBoundedStore((state) => state.userSettings)
  const updateUserSettings = useBoundedStore((state) => state.updateUserSettings)
  const { t } = useTranslation()

  async function onPress(checked: boolean) {
    updateUserSettings("toggleKeepScreenAwake", checked)
  }

  return (
    <Checkbox
      isChecked={userSettings.toggleKeepScreenAwake}
      onPress={onPress}
      text={t("keepTheScreenAwake")}
    />
  );
}

export default ToggleKeepScreenAwake;