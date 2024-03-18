import CustomButton from "@shared/CustomButton/CustomButton";
import TitleWithCustomFont from "@shared/TitleWithCustomFont/TitleWithCustomFont";
import useBoundedStore from "@store/store";
import { router } from "expo-router";
import * as React from "react"
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { useStyles } from "react-native-unistyles";

import { styles as styleSheet } from "./finished.styles";

function Finished() {
  const setSessionStatus = useBoundedStore((state) => state.setSessionStatus)
  const { t } = useTranslation()
  const { styles } = useStyles(styleSheet)

  function handleRestartSession() {
    setSessionStatus("ACTIVE")
  }

  function redirectToMySessions() {
    router.navigate("/mySessions")
  }

  return (
    <View style={styles.container}>
      <TitleWithCustomFont style={styles.title}>
        {t("sessionFinished")}
      </TitleWithCustomFont>
      <View style={styles.buttonsContainer}>
        <CustomButton
          icon={{ name: "restart-alt" }}
          onPress={handleRestartSession}
          theme="rectangle"
          title={t("restart")}
        />
        <CustomButton
          icon={{ name: "format-list-bulleted" }}
          onPress={redirectToMySessions}
          theme="rectangle"
          title={t("mySessions")}
        />
      </View>
    </View>
  );
}

export default Finished;