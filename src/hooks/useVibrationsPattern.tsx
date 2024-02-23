import * as React from "react"

import { defaultVibrationsPattern } from "@/data/defaultUserSettings"
import type { UserSettings } from "@/types"

export function useVibrationsPattern(userSettings: UserSettings) {
  const [isDefaultPattern, setIsDefaultPattern] = React.useState(checkIfDefaultPattern(userSettings.vibrationPattern))

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
  }, [userSettings])

  return {
    isDefaultPattern,
    setIsDefaultPattern,
  }
}