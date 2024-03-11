import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { useTranslation } from "react-i18next";
import { Pressable, TextInput, View, Text } from "react-native";

import { styles } from "./createSessionForm.styles"

import CustomButton from "@/components/CustomButton/CustomButton";
import TitleWithCustomFont from "@/components/TitleWithCustomFont/TitleWithCustomFont";

function CreateSessionForm() {
  const { t } = useTranslation()

  return (
    <View style={styles.form}>
      <TitleWithCustomFont style={styles.title}>{t("CreateSessionForm.sessionCreation")}</TitleWithCustomFont>
      <View style={styles.labelInputContainer}>
        <Text style={styles.label}>{t("CreateSessionForm.sessionName")}</Text>
        <TextInput placeholder={t("CreateSessionForm.sessionNamePlaceholder")} style={styles.input} />
      </View>
      <View style={styles.blocks}>
        <TitleWithCustomFont style={styles.blocksTitle}>{t("CreateSessionForm.blocks")}</TitleWithCustomFont>
        <Pressable style={styles.addBlockButton}>
          <MaterialIcons name="add" size={40} />
        </Pressable>
      </View>
      <CustomButton
        icon={{ name: "create-new-folder" }}
        style={styles.saveSessionButton}
        theme="rectangle"
        title={t("CreateSessionForm.createSession")}
      />
    </View>
  );
}

export default CreateSessionForm;