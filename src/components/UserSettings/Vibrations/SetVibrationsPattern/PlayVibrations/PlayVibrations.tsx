import CustomButton from "@shared/CustomButton/CustomButton";
import { Vibration } from "react-native";

import type { DisabledButtonsState, DisabledButtonActions } from "../disabledButtonsReducer";

import useBoundedStore from "@/store/store";

interface Props {
  disabledButtons: DisabledButtonsState
  dispatchButtonAction: React.Dispatch<DisabledButtonActions>
  isDefaultPattern: boolean
}

function PlayVibrations(props: Props) {
  const { disabledButtons, dispatchButtonAction, isDefaultPattern } = props
  const userSettings = useBoundedStore((state) => state.userSettings)

  function handlePlayPress() {
    dispatchButtonAction({ type: "play/start" })

    const vibrationDuration = userSettings.vibrationPattern.reduce((vibrationDuration, time) => {
      vibrationDuration += time
      return vibrationDuration
    })

    Vibration.vibrate(userSettings.vibrationPattern)
    setTimeout(() => {
      dispatchButtonAction({ type: "play/end", isDefaultPattern })
    }, vibrationDuration)
  }

  return (
    <CustomButton
      disabled={disabledButtons.play}
      icon={{ name: "play-arrow" }}
      onPress={handlePlayPress}
      theme="control"
    />
  );
}

export default PlayVibrations;