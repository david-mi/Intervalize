import * as React from "react"

import { defaultVibrationsPattern } from "@/data/defaultUserSettings"
import useBoundedStore from "@/store/store"

type VibrationPatternType = "default" | "custom"

export function useVibrationsPattern() {
  const vibrationPattern = useBoundedStore(({ userSettings }) => userSettings.vibrationPattern)
  const [isDefaultPattern, setIsDefaultPattern] = React.useState(checkIfDefaultPattern(vibrationPattern))
  const currentVibrationPatternType: VibrationPatternType = isDefaultPattern ? "default" : "custom"

  function checkIfDefaultPattern(patternToCompare: number[]) {
    for (let i = 0; i < defaultVibrationsPattern.length; i++) {
      if (defaultVibrationsPattern[i] !== patternToCompare[i]) {
        return false
      }
    }

    return true
  }

  React.useEffect(() => {
    setIsDefaultPattern(checkIfDefaultPattern(vibrationPattern))
  }, [vibrationPattern])

  return {
    isDefaultPattern,
    currentVibrationPatternType,
  }
}