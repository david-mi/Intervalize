import CustomButton from "@shared/CustomButton/CustomButton";
import TitleWithCustomFont from "@shared/TitleWithCustomFont/TitleWithCustomFont";
import useBoundedStore from "@store/store";
import * as React from "react"
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { useStyles } from "react-native-unistyles";

import { styles as styleSheet } from "./readyToStart.styles";

import type { Session } from "@/types";

function ReadyToStart() {
  const setSessionStatus = useBoundedStore((state) => state.setSessionStatus)
  const currentSession = useBoundedStore((state) => state.currentSession)
  const { t } = useTranslation()
  const { styles } = useStyles(styleSheet)

  function onPress() {
    setSessionStatus("ACTIVE")
  }

  return (
    <View style={styles.container}>
      <TitleWithCustomFont style={styles.title}>{(currentSession as Session).name}</TitleWithCustomFont>
      <CustomButton
        icon={{ name: "play-circle" }}
        onPress={onPress}
        style={styles.button}
        theme="rectangle"
        title={t("start")}
      />
    </View>
  );
}

export default ReadyToStart;