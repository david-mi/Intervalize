import * as React from "react";
import { View, Text } from "react-native";

import SelectIntensityColor from "./SelectIntensityColor/SelectIntensityColor";
import ToggleKeepScreenAwake from "./ToggleKeepScreenAwake/ToggleKeepScreenAwake";
import { styles } from "./display.styles"

function Display() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Couleurs d'intensité</Text>
      <View style={styles.intensityColors}>
        <SelectIntensityColor intensityLevel="LOW" />
        <SelectIntensityColor intensityLevel="MEDIUM" />
        <SelectIntensityColor intensityLevel="HARD" />
      </View>
      <View style={styles.separator} />
      <ToggleKeepScreenAwake />
    </View>
  );
}

export default Display