import * as React from "react";
import { View, Text } from "react-native";

import SelectIntensityColor from "./SelectIntensityColor/SelectIntensityColor";
import ToggleKeepScreenAwake from "./ToggleKeepScreenAwake/ToggleKeepScreenAwake";
import { styles } from "./display.styles"

import { GlobalContext } from "@/context/GlobalContext";
import { UserSettingsContext } from "@/context/UserSettingsContext";

function Display() {
  const { userSettings } = React.useContext(GlobalContext)
  const { updateUserSettings } = React.useContext(UserSettingsContext)

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