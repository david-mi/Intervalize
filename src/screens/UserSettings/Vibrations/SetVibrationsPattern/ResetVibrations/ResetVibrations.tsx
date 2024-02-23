import type { DisabledButtonsState, DisabledButtonActions } from "../disabledButtonsReducer";

import CustomButton from "@/components/CustomButton/CustomButton";
import { defaultUserSettings } from "@/data/defaultUserSettings";
import type { UserSettings } from "@/types";

interface Props {
  disabledButtons: DisabledButtonsState
  dispatchButtonAction: React.Dispatch<DisabledButtonActions>
  customVibrationPatternRef: React.MutableRefObject<number[]>
  timeStampRef: React.MutableRefObject<number>
  updateUserSettings: <K extends keyof UserSettings>(settingName: K, settingValue: UserSettings[K]) => Promise<void>
  isDefaultPattern: boolean
}

function ResetVibrations(props: Props) {
  const { disabledButtons, dispatchButtonAction, customVibrationPatternRef, updateUserSettings } = props

  function handleResetPress() {
    dispatchButtonAction({ type: "reset" })
    customVibrationPatternRef.current = []
    updateUserSettings("vibrationPattern", defaultUserSettings.vibrationPattern)
  }

  return (
    <CustomButton
      icon={{ name: "restart-alt" }}
      onPress={handleResetPress}
      disabled={disabledButtons.reset}
      theme="control"
    />
  );
}

export default ResetVibrations;