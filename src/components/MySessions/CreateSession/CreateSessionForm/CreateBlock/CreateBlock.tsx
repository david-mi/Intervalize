import { MaterialIcons } from "@expo/vector-icons";
import CustomButton from "@shared/CustomButton/CustomButton";
import CustomLabelInputErrorWrapper from "@shared/CustomLabelInputErrorWrapper/CustomLabelInputErrorWrapper";
import TitleWithCustomFont from "@shared/TitleWithCustomFont/TitleWithCustomFont";
import { randomUUID } from "expo-crypto"
import React from "react";
import { useFieldArray, type Control, type FieldErrors } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Alert, Pressable, View } from "react-native";
import { useStyles } from "react-native-unistyles";

import { createBlockStyles } from "./createBlock.styles"
import SectionWrapper from "../SectionWrapper/SectionWrapper";

import type { BlockType, SessionType } from "@/types";

interface CreateBlockProps {
  blockErrors?: FieldErrors<BlockType>
  closeCreateBlock: () => void
  control: Control<SessionType>
  fieldArrayName: `blocks.${number}`
  isFormValid: boolean
  removeBlock: () => void
  selectedBlock: BlockType
}

function CreateBlock(props: CreateBlockProps) {
  const { blockErrors, closeCreateBlock, control, isFormValid, fieldArrayName, removeBlock, selectedBlock } = props

  const { t } = useTranslation()
  const { styles } = useStyles(createBlockStyles)
  const { fields: exercises, append } = useFieldArray({
    control,
    name: `${fieldArrayName}.exercises`,
  });

  function appendNewExercise() {
    append({
      name: `Exercise ${exercises.length + 1}`,
      id: randomUUID(),
      duration: {
        minutes: 0,
        seconds: 1,
      },
      intensityLevel: "MEDIUM",
    })
  }

  function handleCloseCreateBlock() {
    if (isFormValid) return closeCreateBlock()

    Alert.alert(
      t("incompleteBlock"),
      t("deleteTheBlock"),
      [
        { text: t("abort"), style: "cancel" },
        {
          text: t("delete"), onPress: () => {
            closeCreateBlock()
            removeBlock()
          },
        },
      ]
    );
  }

  return (
    <View style={styles.addBlock}>
      <TitleWithCustomFont style={styles.title}>{t("creatingABlock")}</TitleWithCustomFont>
      <Pressable
        onPress={handleCloseCreateBlock}
        style={styles.closeModalButton}
      >
        <MaterialIcons name="close" style={styles.closeModalButtonIcon} />
      </Pressable>
      <CustomLabelInputErrorWrapper
        control={control}
        defaultValue={selectedBlock.name}
        error={blockErrors?.name}
        label={t("blockName")}
        name={`${fieldArrayName}.name`}
        placeholder={t("blockNamePlaceholder")}
      />
      <CustomLabelInputErrorWrapper
        control={control}
        defaultValue={String(selectedBlock.iterations)}
        error={blockErrors?.iterations}
        keyboardType="numeric"
        label={t("iterationsNumber")}
        name={`${fieldArrayName}.iterations`}
      />
      <SectionWrapper
        appendElementHandler={appendNewExercise}
        buttonsDisabled={!!blockErrors?.name || !!blockErrors?.iterations}
        title={t("exercises")}
      >
        {exercises.map((item, index) => (
          <CustomButton
            disabled={!!blockErrors?.name || !!blockErrors?.iterations}
            icon={{ name: "directions-run" }}
            key={item.id}
            onPress={() => { }}
            theme="rectangle"
            title={`${t("exercise")} ${index + 1}`}
          />
        ))}
      </SectionWrapper>
      <CustomButton
        disabled={!isFormValid}
        icon={{ name: "create-new-folder" }}
        onPress={() => closeCreateBlock}
        style={styles.saveSessionButton}
        theme="rectangle"
        title={t("createTheBlock")}
      />
    </View>
  );
}

export default CreateBlock;