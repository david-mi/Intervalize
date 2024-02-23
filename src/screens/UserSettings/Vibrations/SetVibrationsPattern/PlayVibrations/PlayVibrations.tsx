import { Vibration } from "react-native";

import type { DisabledButtonsState, DisabledButtonActions } from "../disabledButtonsReducer";

import CustomButton from "@/components/CustomButton/CustomButton";
import type { UserSettings } from "@/types";

interface Props {
  userSettings: UserSettings
  disabledButtons: DisabledButtonsState
  dispatchButtonAction: React.Dispatch<DisabledButtonActions>
  isDefaultPattern: boolean
}

function PlayVibrations(props: Props) {
  const { disabledButtons, dispatchButtonAction, userSettings, isDefaultPattern } = props

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
      icon={{ name: "play-arrow" }}
      onPress={handlePlayPress}
      disabled={disabledButtons.play}
      theme="control"
    />
  );
}

export default PlayVibrations;