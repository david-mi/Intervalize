import CustomButton from "@shared/CustomButton/CustomButton";
import TextWithCustomFont from "@shared/TextWithCustomFont/TextWithCustomFont";
import TitleWithCustomFont from "@shared/TitleWithCustomFont/TitleWithCustomFont";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { useStyles } from "react-native-unistyles";

import { styles as styleSheet } from "./notSelected.styles";

function NotSelected() {
  const { t } = useTranslation()
  const { styles } = useStyles(styleSheet)

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