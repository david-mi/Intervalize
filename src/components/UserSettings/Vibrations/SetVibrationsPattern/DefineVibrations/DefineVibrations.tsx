import { MaterialIcons } from "@expo/vector-icons";
import CustomButton from "@shared/CustomButton/CustomButton";
import * as React from "react"
import { useTranslation } from "react-i18next";
import { View, type GestureResponderEvent, Vibration, Text } from "react-native";

import { styles } from "./defineVibrations.styles";
import type { DisabledButtonActions, DisabledButtonsState } from "../disabledButtonsReducer";

interface Props {
  disabledButtons: DisabledButtonsState
  dispatchButtonAction: React.Dispatch<DisabledButtonActions>
  customVibrationPatternRef: React.MutableRefObject<number[]>
  timeStampRef: React.MutableRefObject<number>
}

function DefineVibrations(props: Props) {
  const { disabledButtons, dispatchButtonAction, customVibrationPatternRef, timeStampRef } = props
  const displayDefineInstructions = !disabledButtons.define && disabledButtons.stop
  const { t } = useTranslation()

  function handleDefinePressIn(event: GestureResponderEvent) {
    customVibrationPatternRef.current.push(timeStampRef.current !== 0
      ? event.timeStamp - timeStampRef.current
      : 0
    )
    timeStampRef.current = event.timeStamp
    Vibration.vibrate([0, 1000], true)
  }

  function handleDefinePressOut(event: GestureResponderEvent) {
    Vibration.cancel()
    const pressDuration = event.timeStamp - timeStampRef.current!
    customVibrationPatternRef.current.push(pressDuration)

    timeStampRef.current = event.timeStamp
  }

  function handleDefinePress() {
    dispatchButtonAction({ type: "define" })
  }

  React.useEffect(() => {
    return () => {
      Vibration.cancel()
    }
  }, [])

  return (
    <CustomButton
      disabled={disabledButtons.define}
      onPress={handleDefinePress}
      onPressIn={handleDefinePressIn}
      onPressOut={handleDefinePressOut}
      style={styles.define}
    >
      {displayDefineInstructions && <Text style={styles.instructions}>{t("defineVibrationPattern")}</Text>}
      <View style={styles.pressIconWrapper}>
        <MaterialIcons
          color="white"
          name="touch-app"
          size={70}
        />
      </View>
    </CustomButton>
  );
}

export default DefineVibrations;