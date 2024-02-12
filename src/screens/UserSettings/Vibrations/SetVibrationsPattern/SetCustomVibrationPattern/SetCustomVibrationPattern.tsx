import { MaterialIcons } from "@expo/vector-icons";
import * as React from "react"
import { View, Text, Pressable } from "react-native";

import { styles } from "./setCustomVibrationPattern.styles";

interface Props {
  setIsDefaultPattern: React.Dispatch<React.SetStateAction<boolean>>
}

function SetCustomVibrationPattern({ setIsDefaultPattern }: Props) {
  const customVibrationPatternRef = React.useRef<number[]>([])
  customVibrationPatternRef.current = [];

  const [disabledButtons, setDisabledButtons] = React.useState({
    pressZone: false,
    play: false,
    stop: false,
    reset: false,
  })

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
      <Pressable style={styles.pressZone}>
        <Text style={styles.text}>Toucher pour commencer</Text>
        <View style={styles.pressIconWrapper}>
          <MaterialIcons name="touch-app" size={70} color="white" />
        </View>
      </Pressable>
      <View style={styles.buttonsContainer}>
        <Pressable
          onPress={handlePlayPress}
          style={[styles.button, disabledButtons.play ? styles.disabled : null]}
          disabled={disabledButtons.play}
        >
          <MaterialIcons
            style={styles.buttonIcon}
            name="play-arrow"
            size={50}
            color="white"
          />
        </Pressable>
        <Pressable
          onPress={handleStopPress}
          style={[styles.button, disabledButtons.stop ? styles.disabled : null]}
          disabled={disabledButtons.stop}
        >
          <MaterialIcons
            style={styles.buttonIcon}
            name="stop"
            size={50}
            color="white"
          />
        </Pressable>
        <Pressable
          onPress={handleResetPress}
          style={[styles.button, disabledButtons.reset ? styles.disabled : null]}
          disabled={disabledButtons.reset}>
          <MaterialIcons
            style={styles.buttonIcon}
            name="restart-alt"
            size={50}
            color="white"
          />
        </Pressable>
      </View>
    </View>
  );
}

export default SetCustomVibrationPattern;