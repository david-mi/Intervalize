import { MaterialIcons } from "@expo/vector-icons";
import * as React from "react"
import { View, Text, Vibration } from "react-native";

import { styles } from "./setVibrationsPattern.styles";

import CustomButton from "@/components/CustomButton/CustomButton";
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
  const customVibrationPatternRef = React.useRef<number[]>([])
  customVibrationPatternRef.current = [];
  const { isDefaultPattern, setIsDefaultPattern } = useVibrationsPattern(userSettings)
  const [disabledButtons, dispatchButtonAction] = React.useReducer(disabledButtonsReducer, {
    define: false,
    play: false,
    stop: true,
    reset: isDefaultPattern === false,
  })
  const displayDefineInstructions = !disabledButtons.define && disabledButtons.stop

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
    setIsDefaultPattern(false)
  }

  function handleResetPress() {
    dispatchButtonAction({ type: "reset" })
    setIsDefaultPattern(true)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pattern</Text>
      <CustomButton
        style={styles.define}
        onPress={handleDefinePress}
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