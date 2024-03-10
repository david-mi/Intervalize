import * as React from "react";
import { View, Text } from "react-native";

import SelectIntensityColor from "./SelectIntensityColor/SelectIntensityColor";
import ToggleKeepScreenAwake from "./ToggleKeepScreenAwake/ToggleKeepScreenAwake";
import { styles } from "./display.styles"

import { useUserSettings } from "@/hooks/useUserSettings";
import useBoundedStore from "@/store/store";

function Display() {
  const { userSettings } = useBoundedStore()
  const { updateUserSettings } = useUserSettings()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Couleurs d'intensité</Text>
      <View style={styles.intensityColors}>
        <SelectIntensityColor
          intensityLevel="LOW"
          updateUserSettings={updateUserSettings}
          userSettings={userSettings}
        />
        <SelectIntensityColor
          intensityLevel="MEDIUM"
          updateUserSettings={updateUserSettings}
          userSettings={userSettings}
        />
        <SelectIntensityColor
          intensityLevel="HARD"
          updateUserSettings={updateUserSettings}
          userSettings={userSettings}
        />
      </View>
      <View style={styles.separator} />
      <ToggleKeepScreenAwake
        updateUserSettings={updateUserSettings}
        userSettings={userSettings}
      />
    </View>
  );
}

export default Display