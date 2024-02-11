import * as React from "react"
import { Vibration } from "react-native";

import Checkbox from "@/components/Checkbox/Checkbox";
import { UserSettingsContext } from "@/context/UserSettingsContext";
import { defaultVibrationsPattern } from "@/data/defaultUserSettings";

interface Props {
  isDefaultPattern: boolean
  setIsDefaultPattern: React.Dispatch<React.SetStateAction<boolean>>
}

function SetDefaultVibrationPattern({ isDefaultPattern, setIsDefaultPattern }: Props) {
  const { updateUserSettings } = React.useContext(UserSettingsContext)

  function setDefaultVibrationPattern(checked: boolean) {
    if (checked) {
      Vibration.vibrate()

      updateUserSettings("vibrationPattern", defaultVibrationsPattern)
    }

    setIsDefaultPattern(checked)
  }

  return (
    <Checkbox
      text="Pattern par défaut"
      isChecked={isDefaultPattern}
      disabled={isDefaultPattern}
      onPress={setDefaultVibrationPattern}
    />
  );
}

export default SetDefaultVibrationPattern;