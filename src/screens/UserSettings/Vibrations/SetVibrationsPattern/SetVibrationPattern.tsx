import * as React from "react"
import { View, Text } from "react-native";

import DefineVibrations from "./DefineVibrations/DefineVibrations";
import PlayVibrations from "./PlayVibrations/PlayVibrations";
import ResetVibrations from "./ResetVibrations/ResetVibrations";
import StopVibrations from "./StopVibrations/StopVibrations";
import { styles } from "./defineVibrationsButton.styles";
import { disabledButtonsReducer } from "./disabledButtonsReducer";

import { useVibrationsPattern } from "@/hooks/useVibrationsPattern";

function SetCustomVibrationPattern() {
  const { isDefaultPattern } = useVibrationsPattern()
  const [disabledButtons, dispatchButtonAction] = React.useReducer(disabledButtonsReducer, {
    define: false,
    play: false,
    stop: true,
    reset: isDefaultPattern,
  })
  const customVibrationPatternRef = React.useRef<number[]>([])
  const timeStampRef = React.useRef(0)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pattern ({isDefaultPattern ? "Défaut" : "Custom"})</Text>
      <DefineVibrations
        customVibrationPatternRef={customVibrationPatternRef}
        disabledButtons={disabledButtons}
        dispatchButtonAction={dispatchButtonAction}
        timeStampRef={timeStampRef}
      />
      <View style={styles.controlButtons}>
        <PlayVibrations
          disabledButtons={disabledButtons}
          dispatchButtonAction={dispatchButtonAction}
          isDefaultPattern={isDefaultPattern}
        />
        <StopVibrations
          customVibrationPatternRef={customVibrationPatternRef}
          disabledButtons={disabledButtons}
          dispatchButtonAction={dispatchButtonAction}
          timeStampRef={timeStampRef}
        />
        <ResetVibrations
          customVibrationPatternRef={customVibrationPatternRef}
          disabledButtons={disabledButtons}
          dispatchButtonAction={dispatchButtonAction}
          isDefaultPattern={isDefaultPattern}
          timeStampRef={timeStampRef}
        />
      </View>
    </View>
  );
}

export default SetCustomVibrationPattern;