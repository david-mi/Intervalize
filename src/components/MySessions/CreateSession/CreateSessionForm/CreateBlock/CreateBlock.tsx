import { MaterialIcons } from "@expo/vector-icons";
import CustomButton from "@shared/CustomButton/CustomButton";
import CustomLabelInputErrorWrapper from "@shared/CustomLabelInputErrorWrapper/CustomLabelInputErrorWrapper";
import TitleWithCustomFont from "@shared/TitleWithCustomFont/TitleWithCustomFont";
import { randomUUID } from "expo-crypto"
import React from "react";
import { useFieldArray, type Control, type FieldErrors, type UseFieldArrayRemove } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Alert, Pressable, View } from "react-native";
import { useStyles } from "react-native-unistyles";

import { createBlockStyles } from "./createBlock.styles.ts"
import SectionWrapper from "../SectionWrapper/SectionWrapper";

import type { BlockType, SessionType } from "@/types.js";

interface CreateBlockProps {
  errors: FieldErrors<SessionType>
  control: Control<SessionType>
  selectedBlock: BlockType
  selectedBlockIndex: number
  setSelectedBlockIndex: React.Dispatch<React.SetStateAction<number | null>>
  isFormValid: boolean
  removeBlock: UseFieldArrayRemove
}
function CreateBlock(props: CreateBlockProps) {
  const { errors, selectedBlock, setSelectedBlockIndex, selectedBlockIndex, control, isFormValid, removeBlock } = props

  const blockErrors = errors.blocks?.[selectedBlockIndex]
  const { t } = useTranslation()
  const { styles } = useStyles(createBlockStyles)
  const {
    fields: exercises,
    append,
  } = useFieldArray({
    control,
    name: `blocks.${selectedBlockIndex}.exercises`,
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

  function handleCloseBlockCreateBlock() {
    if (!isFormValid) {
      Alert.alert(
        t("incompleteBlock"),
        t("deleteTheBlock"),
        [
          { text: t("abort"), style: "cancel" },
          {
            text: t("delete"), onPress: () => {
              setSelectedBlockIndex(null)
              removeBlock(selectedBlockIndex)
            },
          },
        ]
      );
    } else {
      setSelectedBlockIndex(null)
    }
  }

  return (
    <View style={styles.addBlock}>
      <TitleWithCustomFont style={styles.title}>{t("creatingABlock")}</TitleWithCustomFont>
      <Pressable
        onPress={handleCloseBlockCreateBlock}
        style={styles.closeModalButton}
      >
        <MaterialIcons name="close" style={styles.closeModalButtonIcon} />
      </Pressable>
      <CustomLabelInputErrorWrapper
        control={control}
        defaultValue={selectedBlock.name}
        error={blockErrors?.name}
        label={t("blockName")}
        name={`blocks.${selectedBlockIndex}.name`}
        placeholder={t("blockNamePlaceholder")}
      />
      <CustomLabelInputErrorWrapper
        control={control}
        defaultValue={String(selectedBlock.iterations)}
        error={blockErrors?.iterations}
        keyboardType="numeric"
        label={t("iterationsNumber")}
        name={`blocks.${selectedBlockIndex}.iterations`}
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
            onPress={() => setSelectedBlockIndex(index)}
            theme="rectangle"
            title={`${t("exercise")} ${index + 1}`}
          />
        ))}
      </SectionWrapper>
      <CustomButton
        disabled={!isFormValid}
        icon={{ name: "create-new-folder" }}
        onPress={() => setSelectedBlockIndex(null)}
        style={styles.saveSessionButton}
        theme="rectangle"
        title={t("createTheBlock")}
      />
    </View>
  );
}

export default CreateBlock;