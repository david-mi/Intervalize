import useBoundedStore from "@store/store"
import { activateKeepAwakeAsync, deactivateKeepAwake } from "expo-keep-awake"
import { useEffect } from "react"

export function useKeepScreenAwake() {
  const toggleKeepScreenAwake = useBoundedStore(({ userSettings }) => userSettings.toggleKeepScreenAwake)

  useEffect(() => {
    try {
      if (toggleKeepScreenAwake) {
        activateKeepAwakeAsync("INTERVALIZE_SCREEN_AWAKE")
      } else {
        deactivateKeepAwake("INTERVALIZE_SCREEN_AWAKE")
      }
    } catch (error) {
      console.log(error)
    }
  }, [toggleKeepScreenAwake])
}