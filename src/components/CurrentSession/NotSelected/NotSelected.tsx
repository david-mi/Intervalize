import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { View } from "react-native";

import { styles } from "./notSelected.styles";

import CustomButton from "@/components/CustomButton/CustomButton";
import TextWithCustomFont from "@/components/TextWithCustomFont/TextWithCustomFont";
import TitleWithCustomFont from "@/components/TitleWithCustomFont/TitleWithCustomFont";

function NotSelected() {
  const { t } = useTranslation()

  function redirectToMySessions() {
    router.navigate("/mySessions")
  }

  return (
    <View style={styles.container}>
      <View style={styles.infos}>
        <TitleWithCustomFont style={styles.title}>{t("noSessionSelected")}</TitleWithCustomFont>
        <TextWithCustomFont style={styles.instructions}>{t("chooseASession")}</TextWithCustomFont>
      </View>
      <CustomButton
        icon={{ name: "format-list-bulleted" }}
        onPress={redirectToMySessions}
        style={styles.button}
        theme="rectangle"
        title={t("mySessions")}
      />
    </View>
  );
}

export default NotSelected;