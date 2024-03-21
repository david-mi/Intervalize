import { MaterialIcons } from "@expo/vector-icons";
import CustomLabelInputErrorWrapper from "@shared/CustomLabelInputErrorWrapper/CustomLabelInputErrorWrapper";
import TitleWithCustomFont from "@shared/TitleWithCustomFont/TitleWithCustomFont";
import React from "react";
import { type Control, type FieldErrors } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Pressable, View } from "react-native";
import { useStyles } from "react-native-unistyles";

import { createBlockStyles } from "./createBlock.styles.ts"

import type { SessionType } from "@/types.js";

interface CreateBlockProps {
  errors: FieldErrors<SessionType>
  control: Control<SessionType>
  setSelectedBlockIndex: React.Dispatch<React.SetStateAction<number | null>>
  openedBlockIndex: number
}

function CreateBlock({ errors, setSelectedBlockIndex, openedBlockIndex, control }: CreateBlockProps) {
  const blockErrors = errors.blocks?.[openedBlockIndex]

  const { t } = useTranslation()
  const { styles } = useStyles(createBlockStyles)
  return (
    <View style={styles.addBlock}>
      <View style={styles.addBlock}>
        <TitleWithCustomFont style={styles.title}>{t("creatingABlock")}</TitleWithCustomFont>
        <Pressable
          onPress={() => setSelectedBlockIndex(null)}
          style={styles.closeModalButton}
        >
          <MaterialIcons name="close" style={styles.closeModalButtonIcon} />
        </Pressable>
        <CustomLabelInputErrorWrapper
          control={control}
          error={blockErrors?.name}
          label={t("blockName")}
          name={`blocks.${openedBlockIndex}.name`}
          placeholder={t("blockNamePlaceholder")}
        />
        <CustomLabelInputErrorWrapper
          control={control}
          error={blockErrors?.iterations}
          keyboardType="numeric"
          label={t("iterationsNumber")}
          name={`blocks.${openedBlockIndex}.iterations`}
        />
      </View>
    </View>
  );
}

export default CreateBlock;