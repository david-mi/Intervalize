import type { DisabledButtonsState, DisabledButtonActions } from "../disabledButtonsReducer";

import CustomButton from "@/components/CustomButton/CustomButton";
import { defaultUserSettings } from "@/data/defaultUserSettings";
import useBoundedStore from "@/store/store";

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