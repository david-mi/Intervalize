import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { TabActions } from "@react-navigation/native";
import * as React from "react"
import { useTranslation } from "react-i18next";
import { View } from "react-native";

import { styles } from "./finished.styles";

import CustomButton from "@/components/CustomButton/CustomButton";
import TitleWithCustomFont from "@/components/TitleWithCustomFont/TitleWithCustomFont";
import useBoundedStore from "@/store/store";
import type { TabNavParamList } from "@/types";

type Props = Pick<BottomTabScreenProps<TabNavParamList, "Séance en cours">, "navigation">

function Finished({ navigation }: Props) {
  const setSessionStatus = useBoundedStore((state) => state.setSessionStatus)
  const { t } = useTranslation()

  function handleRestartSession() {
    setSessionStatus("ACTIVE")
  }

  function redirectToMySessions() {
    const jumpToAction = TabActions.jumpTo("Mes séances");
    navigation.dispatch(jumpToAction);
  }

  return (
    <View style={styles.container}>
      <TitleWithCustomFont style={styles.title}>
        {t("Finished.finishedSession")}
      </TitleWithCustomFont>
      <View style={styles.buttonsContainer}>
        <CustomButton
          icon={{ name: "restart-alt" }}
          onPress={handleRestartSession}
          theme="rectangle"
          title={t("Finished.restart")}
        />
        <CustomButton
          icon={{ name: "format-list-bulleted" }}
          onPress={redirectToMySessions}
          theme="rectangle"
          title={t("Finished.mySessions")}
        />
      </View>
    </View>
  );
}

export default Finished;