import * as React from "react";
import { useTranslation } from "react-i18next";
import { View, Text, ScrollView } from "react-native";
import { useStyles } from "react-native-unistyles";

import SelectIntensityColor from "./SelectIntensityColor/SelectIntensityColor";
import SelectTheme from "./SelectTheme/SelectTheme";
import ToggleKeepScreenAwake from "./ToggleKeepScreenAwake/ToggleKeepScreenAwake";
import { styles as styleSheet } from "./display.styles"

function Display() {
  const { t } = useTranslation()
  const { styles } = useStyles(styleSheet)

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Text style={styles.title}>{t("intensityColors")}</Text>
        <View style={styles.intensityColors}>
          <SelectIntensityColor intensityLevel="LOW" />
          <SelectIntensityColor intensityLevel="MEDIUM" />
          <SelectIntensityColor intensityLevel="HIGH" />
        </View>
        <View style={styles.separator} />
        <Text style={styles.title}>{t("theme")}</Text>
        <SelectTheme />
        <View style={styles.separator} />
        <ToggleKeepScreenAwake />
      </ScrollView>
    </View>
  );
}

export default Display