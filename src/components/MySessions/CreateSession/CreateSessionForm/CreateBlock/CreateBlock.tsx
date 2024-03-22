import { MaterialIcons } from "@expo/vector-icons";
import CustomLabelInputErrorWrapper from "@shared/CustomLabelInputErrorWrapper/CustomLabelInputErrorWrapper";
import TitleWithCustomFont from "@shared/TitleWithCustomFont/TitleWithCustomFont";
import React from "react";
import { type Control, type FieldErrors } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Pressable, View } from "react-native";
import { useStyles } from "react-native-unistyles";

import { createBlockStyles } from "./createBlock.styles.ts"

import type { BlockType, SessionType } from "@/types.js";

interface CreateBlockProps {
  errors: FieldErrors<SessionType>
  control: Control<SessionType>
  selectedBlock: BlockType
  selectedBlockIndex: number
  setSelectedBlockIndex: React.Dispatch<React.SetStateAction<number | null>>
}
function CreateBlock({ errors, selectedBlock, setSelectedBlockIndex, selectedBlockIndex, control }: CreateBlockProps) {
  const blockErrors = errors.blocks?.[selectedBlockIndex]
  const { t } = useTranslation()
  const { styles } = useStyles(createBlockStyles)

  return (
    <View style={styles.addBlock}>
      <TitleWithCustomFont style={styles.title}>{t("creatingABlock")}</TitleWithCustomFont>
      <Pressable
        onPress={() => setSelectedBlockIndex(null)}
        style={styles.closeModalButton}
      >
        <MaterialIcons name="close" style={styles.closeModalButtonIcon} />
      </Pressable>
      <CustomLabelInputErrorWrapper
        autoFocus
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
    </View>
  );
}

export default CreateBlock;