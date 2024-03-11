import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { TabActions } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { View } from "react-native";

import { styles } from "./notSelected.styles";

import CustomButton from "@/components/CustomButton/CustomButton";
import TextWithCustomFont from "@/components/TextWithCustomFont/TextWithCustomFont";
import TitleWithCustomFont from "@/components/TitleWithCustomFont/TitleWithCustomFont";
import type { TabNavParamList } from "@/types";

type Props = Pick<BottomTabScreenProps<TabNavParamList, "Séance en cours">, "navigation">

function NotSelected({ navigation }: Props) {
  const { t } = useTranslation()

  function redirectToMySessions() {
    const jumpToAction = TabActions.jumpTo("Mes séances");
    navigation.dispatch(jumpToAction);
  }

  return (
    <View style={styles.container}>
      <View style={styles.infos}>
        <TitleWithCustomFont style={styles.title}>{t("NotSelected.noSessionSelected")}</TitleWithCustomFont>
        <TextWithCustomFont style={styles.instructions}>{t("NotSelected.chooseASession")}</TextWithCustomFont>
      </View>
      <CustomButton
        icon={{ name: "format-list-bulleted" }}
        onPress={redirectToMySessions}
        style={styles.button}
        theme="rectangle"
        title={t("NotSelected.mySessionsButton")}
      />
    </View>
  );
}

export default NotSelected;