import CustomButton from "@shared/CustomButton/CustomButton";
import useBoundedStore from "@store/store";

import type { DisabledButtonsState, DisabledButtonActions } from "../disabledButtonsReducer";

interface Props {
  disabledButtons: DisabledButtonsState
  dispatchButtonAction: React.Dispatch<DisabledButtonActions>
  customVibrationPatternRef: React.MutableRefObject<number[]>
  timeStampRef: React.MutableRefObject<number>
}

function StopVibrations(props: Props) {
  const { disabledButtons, dispatchButtonAction, customVibrationPatternRef, timeStampRef } = props
  const updateUserSettings = useBoundedStore((state) => state.updateUserSettings)

  function handleStopPress() {
    dispatchButtonAction({ type: "stop" })
    updateUserSettings("vibrationPattern", customVibrationPatternRef.current)
    timeStampRef.current = 0
  }

  return (
    <CustomButton
      disabled={disabledButtons.stop}
      icon={{ name: "stop" }}
      onPress={handleStopPress}
      theme="control"
    />
  )
}

export default StopVibrations;