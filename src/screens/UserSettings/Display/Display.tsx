import * as React from "react";
import { useTranslation } from "react-i18next";
import { View, Text } from "react-native";

import SelectIntensityColor from "./SelectIntensityColor/SelectIntensityColor";
import ToggleKeepScreenAwake from "./ToggleKeepScreenAwake/ToggleKeepScreenAwake";
import { styles } from "./display.styles"

function Display() {
  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("intensityColors")}</Text>
      <View style={styles.intensityColors}>
        <SelectIntensityColor intensityLevel="LOW" />
        <SelectIntensityColor intensityLevel="MEDIUM" />
        <SelectIntensityColor intensityLevel="HIGH" />
      </View>
      <View style={styles.separator} />
      <ToggleKeepScreenAwake />
    </View>
  );
}

export default Display