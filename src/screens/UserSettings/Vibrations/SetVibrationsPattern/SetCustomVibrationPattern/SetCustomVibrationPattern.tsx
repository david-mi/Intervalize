import { MaterialIcons } from "@expo/vector-icons";
import * as React from "react"
import { View, Text } from "react-native";

import { styles } from "./setCustomVibrationPattern.styles";

import CustomButton from "@/components/CustomButton/CustomButton";

interface Props {
  setIsDefaultPattern: React.Dispatch<React.SetStateAction<boolean>>
}

interface DisabledButtonsState {
  pressZone: boolean
  play: boolean
  stop: boolean
  reset: boolean
}

type DisabledButtonActions = {
  type: "pressZone" | "stop" | "play/start" | "play/end" | "reset"
}

function disabledButtonsReducer(state: DisabledButtonsState, action: DisabledButtonActions): DisabledButtonsState {
  switch (action.type) {
    case "pressZone": return ({
      play: true,
      pressZone: false,
      stop: false,
      reset: true,
    })
    case "play/start": return ({
      play: true,
      pressZone: true,
      stop: true,
      reset: true,
    })
    case "play/end": return ({
      ...state,
      play: false,
      reset: false,
    })
    case "stop": return ({
      pressZone: true,
      play: false,
      stop: true,
      reset: false,
    })
    default: return {
      pressZone: false,
      play: true,
      stop: true,
      reset: true,
    }
  }
}

function SetCustomVibrationPattern({ setIsDefaultPattern }: Props) {
  const customVibrationPatternRef = React.useRef<number[]>([])
  customVibrationPatternRef.current = [];
  const [disabledButtons, dispatchButtonAction] = React.useReducer(disabledButtonsReducer, {
    pressZone: false,
    play: true,
    stop: true,
    reset: true,
  })
  const displayPressZoneInstructions = !disabledButtons.pressZone && disabledButtons.stop

  function handlePressZonePress() {
    console.log("PRESS ZONE")
    dispatchButtonAction({ type: "pressZone" })
  }

  function handlePlayPress() {
    console.log("PLAY")
    dispatchButtonAction({ type: "play/start" })

    setTimeout(() => {
      dispatchButtonAction({ type: "play/end" })
    }, 2000)
  }

  function handleStopPress() {
    console.log("STOP")
    dispatchButtonAction({ type: "stop" })
  }

  function handleResetPress() {
    console.log("RESET")
    dispatchButtonAction({ type: "reset" })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pattern Personnalisé</Text>
      <CustomButton
        style={styles.pressZone}
        onPress={handlePressZonePress}
        disabled={disabledButtons.pressZone}
      >
        {displayPressZoneInstructions && <Text style={styles.text}>Toucher pour commencer</Text>}
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
          disabled={disabledButtons.reset}
          theme="control"
        />
      </View>
    </View>
  );
}

export default SetCustomVibrationPattern;