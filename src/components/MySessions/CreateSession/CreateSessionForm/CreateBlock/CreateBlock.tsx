import { MaterialIcons } from "@expo/vector-icons";
import TitleWithCustomFont from "@shared/TitleWithCustomFont/TitleWithCustomFont";
import React from "react";
import { Controller, type Control, type FieldErrors } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Pressable, TextInput, View, Text } from "react-native";
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
  const { styles, theme } = useStyles(createBlockStyles)
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
        <View style={styles.labelInputContainer}>
          <Text style={styles.label}>{t("blockName")}</Text>
          <Controller
            control={control}
            name={`blocks.${openedBlockIndex}.name`}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                placeholder={t("blockNamePlaceholder")}
                placeholderTextColor={theme.COLORS.LABEL}
                style={styles.input}
                value={value}
              />
            )}
            rules={{
              required: true,
            }}
          />
          {blockErrors?.name && <Text style={styles.error}>{blockErrors.name.message}</Text>}
        </View>
        <View style={styles.labelInputContainer}>
          <Text style={styles.label}>{t("iterationsNumber")}</Text>
          <Controller
            control={control}
            name={`blocks.${openedBlockIndex}.iterations`}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                placeholder="Mettre un nombre"
                placeholderTextColor={theme.COLORS.LABEL}
                style={styles.input}
                value={String(value)}
              />
            )}
            rules={{
              required: true,
            }}
          />
          {blockErrors?.iterations && <Text style={styles.error}>{blockErrors.iterations.message}</Text>}
        </View>
      </View>
    </View>
  );
}

export default CreateBlock;