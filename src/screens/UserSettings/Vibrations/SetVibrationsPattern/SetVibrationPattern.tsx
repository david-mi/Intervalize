import { MaterialIcons } from "@expo/vector-icons";
import * as React from "react"
import { View, Text, Vibration, type GestureResponderEvent } from "react-native";

import { styles } from "./setVibrationsPattern.styles";

import CustomButton from "@/components/CustomButton/CustomButton";
import { defaultUserSettings } from "@/data/defaultUserSettings";
import { useVibrationsPattern } from "@/hooks/useVibrationsPattern";
import type { UserSettings } from "@/types";

interface Props {
  updateUserSettings: <K extends keyof UserSettings>(settingName: K, settingValue: UserSettings[K]) => Promise<void>
  userSettings: UserSettings
}

interface DisabledButtonsState {
  define: boolean
  play: boolean
  stop: boolean
  reset: boolean
}

type DisabledButtonActions =
  { type: "define" | "stop" | "play/start" | "reset" }
  | { type: "play/end", isDefaultPattern: boolean };

function disabledButtonsReducer(state: DisabledButtonsState, action: DisabledButtonActions): DisabledButtonsState {
  switch (action.type) {
    case "define": return ({
      play: true,
      define: false,
      stop: false,
      reset: true,
    })
    case "play/start": return ({
      play: true,
      define: true,
      stop: true,
      reset: true,
    })
    case "play/end": return ({
      ...state,
      define: !action.isDefaultPattern,
      play: false,
      reset: action.isDefaultPattern,
    })
    case "stop": return ({
      define: true,
      play: false,
      stop: true,
      reset: false,
    })
    default: return {
      define: false,
      play: false,
      stop: true,
      reset: true,
    }
  }
}

function SetCustomVibrationPattern({ updateUserSettings, userSettings }: Props) {
  const { isDefaultPattern } = useVibrationsPattern(userSettings)
  const [disabledButtons, dispatchButtonAction] = React.useReducer(disabledButtonsReducer, {
    define: false,
    play: false,
    stop: true,
    reset: isDefaultPattern === false,
  })
  const displayDefineInstructions = !disabledButtons.define && disabledButtons.stop
  const customVibrationPatternRef = React.useRef<number[]>([])
  const timeStampRef = React.useRef(0)

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

  function handleStopPress() {
    dispatchButtonAction({ type: "stop" })
    updateUserSettings("vibrationPattern", customVibrationPatternRef.current)
    timeStampRef.current = 0
  }

  function handleResetPress() {
    dispatchButtonAction({ type: "reset" })
    customVibrationPatternRef.current = []
    updateUserSettings("vibrationPattern", defaultUserSettings.vibrationPattern)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pattern ({isDefaultPattern ? "Défaut" : "Custom"})</Text>
      <CustomButton
        style={styles.define}
        onPress={handleDefinePress}
        onPressIn={handleDefinePressIn}
        onPressOut={handleDefinePressOut}
        disabled={disabledButtons.define}
      >
        {displayDefineInstructions && <Text style={styles.text}>Définir votre pattern</Text>}
        <View style={styles.pressIconWrapper}>
          <MaterialIcons name="touch-app" size={70} color="white" />
        </View>
      </CustomButton>
      <View style={styles.buttonsContainer}>
        <CustomButton
          icon={{ name: "play-arrow" }}
          onPress={handlePlayPress}
          disabled={disabledButtons.play}
          theme="control"
        />
        <CustomButton
          icon={{ name: "stop" }}
          onPress={handleStopPress}
          disabled={disabledButtons.stop}
          theme="control"
        />
        <CustomButton
          icon={{ name: "restart-alt" }}
          onPress={handleResetPress}
          disabled={isDefaultPattern || disabledButtons.reset}
          theme="control"
        />
      </View>
    </View>
  );
}

export default SetCustomVibrationPattern;