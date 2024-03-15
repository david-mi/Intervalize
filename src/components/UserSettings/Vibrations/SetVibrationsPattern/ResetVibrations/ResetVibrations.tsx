import CustomButton from "@shared/CustomButton/CustomButton";
import useBoundedStore from "@store/store";

import type { DisabledButtonsState, DisabledButtonActions } from "../disabledButtonsReducer";

import { defaultUserSettings } from "@/data/defaultUserSettings";

interface Props {
  disabledButtons: DisabledButtonsState
  dispatchButtonAction: React.Dispatch<DisabledButtonActions>
  customVibrationPatternRef: React.MutableRefObject<number[]>
  timeStampRef: React.MutableRefObject<number>
  isDefaultPattern: boolean
}

function ResetVibrations(props: Props) {
  const updateUserSettings = useBoundedStore((state) => state.updateUserSettings)
  const { disabledButtons, dispatchButtonAction, customVibrationPatternRef } = props

  function handleResetPress() {
    dispatchButtonAction({ type: "reset" })
    customVibrationPatternRef.current = []
    updateUserSettings("vibrationPattern", defaultUserSettings.vibrationPattern)
  }

  return (
    <CustomButton
      disabled={disabledButtons.reset}
      icon={{ name: "restart-alt" }}
      onPress={handleResetPress}
      theme="control"
    />
  );
}

export default ResetVibrations;