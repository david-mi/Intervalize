import CustomButton from "@shared/CustomButton/CustomButton";
import TitleWithCustomFont from "@shared/TitleWithCustomFont/TitleWithCustomFont";
import * as React from "react"
import { useTranslation } from "react-i18next";
import { View } from "react-native";

import { styles } from "./readyToStart.styles";

import useBoundedStore from "@store/store";
import type { Session } from "@/types";

function ReadyToStart() {
  const setSessionStatus = useBoundedStore((state) => state.setSessionStatus)
  const currentSession = useBoundedStore((state) => state.currentSession)
  const { t } = useTranslation()

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