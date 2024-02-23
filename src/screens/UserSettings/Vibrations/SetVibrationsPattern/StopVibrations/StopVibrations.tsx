import type { DisabledButtonsState, DisabledButtonActions } from "../disabledButtonsReducer";

import CustomButton from "@/components/CustomButton/CustomButton";
import type { UserSettings } from "@/types";

interface Props {
  disabledButtons: DisabledButtonsState
  dispatchButtonAction: React.Dispatch<DisabledButtonActions>
  customVibrationPatternRef: React.MutableRefObject<number[]>
  timeStampRef: React.MutableRefObject<number>
  updateUserSettings: <K extends keyof UserSettings>(settingName: K, settingValue: UserSettings[K]) => Promise<void>
}

function StopVibrations(props: Props) {
  const { disabledButtons, dispatchButtonAction, customVibrationPatternRef, timeStampRef, updateUserSettings } = props

  function handleStopPress() {
    dispatchButtonAction({ type: "stop" })
    updateUserSettings("vibrationPattern", customVibrationPatternRef.current)
    timeStampRef.current = 0
  }

  return (
    <CustomButton
      icon={{ name: "stop" }}
      onPress={handleStopPress}
      disabled={disabledButtons.stop}
      theme="control"
    />
  )
}

export default StopVibrations;