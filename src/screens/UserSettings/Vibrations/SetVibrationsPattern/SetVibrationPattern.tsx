import * as React from "react"
import { View } from "react-native";

import { styles } from "./setVibrationsPattern.styles"

import Checkbox from "@/components/Checkbox/Checkbox";
import { GlobalContext } from "@/context/GlobalContext";
import { UserSettingsContext } from "@/context/UserSettingsContext";
import { defaultVibrationsPattern } from "@/data/defaultUserSettings";

function SetVibrationPattern() {
  const { updateUserSettings } = React.useContext(UserSettingsContext)
  const { userSettings } = React.useContext(GlobalContext)
  const [isDefaultPattern, setIsDefaultPattern] = React.useState(checkIfDefaultPattern(userSettings.vibrationPattern))

  function setDefaultVibrationPattern() {
    updateUserSettings("vibrationPattern", defaultVibrationsPattern)
  }

  function checkIfDefaultPattern(patternToCompare: number[]) {
    for (let i = 0; i < defaultVibrationsPattern.length; i++) {
      if (defaultVibrationsPattern[i] !== patternToCompare[i]) {
        return false
      }
    }

    return true
  }

  React.useEffect(() => {
    setIsDefaultPattern(checkIfDefaultPattern(userSettings.vibrationPattern))
  }, [])

  return (
    <View style={styles.container}>
      <Checkbox
        text="Pattern par défaut"
        isChecked={isDefaultPattern}
        onPress={setDefaultVibrationPattern}
      />
    </View>
  );
}

export default SetVibrationPattern;