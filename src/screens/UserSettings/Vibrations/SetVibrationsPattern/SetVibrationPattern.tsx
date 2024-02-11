import * as React from "react"
import { View } from "react-native";

import SetDefaultVibrationPattern from "./SetDefaultVibrationPattern/SetDefaultVibrationPattern";
import { styles } from "./setVibrationsPattern.styles"

import { GlobalContext } from "@/context/GlobalContext";
import { defaultVibrationsPattern } from "@/data/defaultUserSettings";

function SetVibrationPattern() {
  const { userSettings } = React.useContext(GlobalContext)
  const [isDefaultPattern, setIsDefaultPattern] = React.useState(checkIfDefaultPattern(userSettings.vibrationPattern))

  function checkIfDefaultPattern(patternToCompare: number[]) {
    for (let i = 0; i < defaultVibrationsPattern.length; i++) {
      if (defaultVibrationsPattern[i] !== patternToCompare[i]) {
        return false
      }
    }

    return true
  }

  return (
    <View style={styles.container}>
      <SetDefaultVibrationPattern
        isDefaultPattern={isDefaultPattern}
        setIsDefaultPattern={setIsDefaultPattern}
      />
    </View>
  );
}

export default SetVibrationPattern;