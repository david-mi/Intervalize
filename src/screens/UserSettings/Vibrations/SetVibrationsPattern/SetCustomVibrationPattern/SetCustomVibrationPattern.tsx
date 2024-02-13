import { MaterialIcons } from "@expo/vector-icons";
import * as React from "react"
import { View, Text } from "react-native";

import { styles } from "./setCustomVibrationPattern.styles";

import CustomButton from "@/components/CustomButton/CustomButton";

interface Props {
  setIsDefaultPattern: React.Dispatch<React.SetStateAction<boolean>>
}

function SetCustomVibrationPattern({ setIsDefaultPattern }: Props) {
  const customVibrationPatternRef = React.useRef<number[]>([])
  customVibrationPatternRef.current = [];

  const [disabledButtons, setDisabledButtons] = React.useState({
    pressZone: false,
    play: true,
    stop: true,
    reset: true,
  })

  function handlePressZonePress() {
    console.log("PRESS ZONE")
  }

  function handlePlayPress() {
    console.log("PLAY")
  }

  function handleStopPress() {
    console.log("STOP")
  }

  function handleResetPress() {
    console.log("RESET")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pattern Personnalisé</Text>
      <CustomButton
        style={styles.pressZone}
        onPress={handlePressZonePress}
        disabled={disabledButtons.pressZone}
      >
        <Text style={styles.text}>Toucher pour commencer</Text>
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