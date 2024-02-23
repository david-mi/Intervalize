import * as React from "react"
import { View, Text } from "react-native";

import DefineVibrations from "./DefineVibrations/DefineVibrations";
import PlayVibrations from "./PlayVibrations/PlayVibrations";
import ResetVibrations from "./ResetVibrations/ResetVibrations";
import StopVibrations from "./StopVibrations/StopVibrations";
import { styles } from "./defineVibrationsButton.styles";
import { disabledButtonsReducer } from "./disabledButtonsReducer";

import { useVibrationsPattern } from "@/hooks/useVibrationsPattern";
import type { UserSettings } from "@/types";

interface Props {
  updateUserSettings: <K extends keyof UserSettings>(settingName: K, settingValue: UserSettings[K]) => Promise<void>
  userSettings: UserSettings
}

function SetCustomVibrationPattern({ updateUserSettings, userSettings }: Props) {
  const { isDefaultPattern } = useVibrationsPattern(userSettings)
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
          userSettings={userSettings}
        />
        <StopVibrations
          customVibrationPatternRef={customVibrationPatternRef}
          disabledButtons={disabledButtons}
          dispatchButtonAction={dispatchButtonAction}
          timeStampRef={timeStampRef}
          updateUserSettings={updateUserSettings}
        />
        <ResetVibrations
          customVibrationPatternRef={customVibrationPatternRef}
          disabledButtons={disabledButtons}
          dispatchButtonAction={dispatchButtonAction}
          timeStampRef={timeStampRef}
          updateUserSettings={updateUserSettings}
          isDefaultPattern={isDefaultPattern}
        />
      </View>
    </View>
  );
}

export default SetCustomVibrationPattern;