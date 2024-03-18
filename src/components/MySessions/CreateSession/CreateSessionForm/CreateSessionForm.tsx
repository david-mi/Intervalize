import { MaterialIcons } from "@expo/vector-icons";
import CustomButton from "@shared/CustomButton/CustomButton";
import TitleWithCustomFont from "@shared/TitleWithCustomFont/TitleWithCustomFont";
import React from "react";
import { useTranslation } from "react-i18next";
import { Pressable, TextInput, View, Text } from "react-native";
import { useStyles } from "react-native-unistyles";

import { styles as styleSheet } from "./createSessionForm.styles"

function CreateSessionForm() {
  const { t } = useTranslation()
  const { styles, theme } = useStyles(styleSheet)

  return (
    <View style={styles.form}>
      <TitleWithCustomFont style={styles.title}>{t("creatingASession")}</TitleWithCustomFont>
      <View style={styles.labelInputContainer}>
        <Text style={styles.label}>{t("sessionName")}</Text>
        <TextInput
          placeholder={t("sessionNamePlaceholder")}
          placeholderTextColor={theme.COLORS.LABEL}
          style={styles.input}
        />
      </View>
      <View style={styles.blocks}>
        <TitleWithCustomFont style={styles.blocksTitle}>{t("blocks")}</TitleWithCustomFont>
        <Pressable style={styles.addBlockButton}>
          <MaterialIcons
            name="add"
            size={40}
            style={styles.addBlockButtonIcon}
          />
        </Pressable>
      </View>
      <CustomButton
        icon={{ name: "create-new-folder" }}
        style={styles.saveSessionButton}
        theme="rectangle"
        title={t("createTheSession")}
      />
    </View>
  );
}

export default CreateSessionForm;