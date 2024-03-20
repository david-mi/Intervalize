import { MaterialIcons } from "@expo/vector-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomButton from "@shared/CustomButton/CustomButton";
import TitleWithCustomFont from "@shared/TitleWithCustomFont/TitleWithCustomFont";
import React from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form"
import { useTranslation } from "react-i18next";
import { Pressable, TextInput, View, Text, Modal, ScrollView } from "react-native";
import { UnistylesRuntime, useStyles } from "react-native-unistyles";
import { z } from "zod";

import { styles as styleSheet } from "./createSessionForm.styles"

const exerciseSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  duration: z.object({
    minutes: z.number().min(0).max(59),
    seconds: z.number().min(1).max(59),
  }),
  intensityLevel: z.union([
    z.literal("LOW"),
    z.literal("MEDIUM"),
    z.literal("HIGH"),
  ]),
})

const blockSchema = z.object({
  name: z.string().min(3),
  iterations: z.coerce
    .number()
    .int()
    .positive()
    .min(1),
  exercises: z.array(exerciseSchema).min(1),
})

const sessionSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.string().datetime(),
  name: z.string().min(1),
  blocks: z.array(blockSchema).min(1),
});

function CreateSessionForm() {
  const { t } = useTranslation()
  const { styles, theme } = useStyles(styleSheet)
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof sessionSchema>>({
    mode: "onChange",
    resolver: zodResolver(sessionSchema),
    defaultValues: {
      id: "08c71152-c552-42e7-b094-f510ff44e9cb",
      createdAt: new Date(2024, 1, 1).toISOString(),
    },
  })
  const {
    fields: blockFields,
    append,
  } = useFieldArray({
    control,
    name: "blocks",
  });
  const [openedBlockIndex, setOpenedBlockIndex] = React.useState<number | null>(null)

  console.log(errors, blockFields)

  function onSubmit(data) {
    console.log(data)
  }

  if (openedBlockIndex !== null) {
    return (
      <View style={styles.addBlock}>
        <TitleWithCustomFont style={styles.title}>{t("creatingABlock")}</TitleWithCustomFont>
        <Pressable
          onPress={() => setOpenedBlockIndex(null)}
          style={styles.closeModalButton}
        >
          <MaterialIcons name="close" style={styles.closeModalButtonIcon} />
        </Pressable>
        <View style={styles.labelInputContainer}>
          <Text style={styles.label}>{t("blockName")}</Text>
          <Controller
            control={control}
            name={`blocks.${openedBlockIndex}.name`}
            render={({ field: { onChange, onBlur, value } }) => {
              console.log("block : " + value)
              return (
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  placeholder={t("blockNamePlaceholder")}
                  placeholderTextColor={theme.COLORS.LABEL}
                  style={styles.input}
                  value={value}
                />
              )
            }}
            rules={{
              required: true,
            }}
          />
          {errors.blocks?.[openedBlockIndex]?.name && <Text style={styles.error}>{errors.blocks?.[openedBlockIndex]?.name?.message}</Text>}
        </View>
        <View style={styles.labelInputContainer}>
          <Text style={styles.label}>{t("iterationsNumber")}</Text>
          <Controller
            control={control}
            name={`blocks.${openedBlockIndex}.iterations`}
            render={({ field: { onChange, onBlur, value } }) => {
              console.log("block : " + value)
              return (
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  placeholder="Mettre un nombre"
                  placeholderTextColor={theme.COLORS.LABEL}
                  style={styles.input}
                  value={String(value)}
                />
              )
            }}
            rules={{
              required: true,
            }}
          />
          {errors.blocks?.[openedBlockIndex]?.iterations && <Text style={styles.error}>{errors.blocks?.[openedBlockIndex]?.iterations?.message}</Text>}
        </View>
      </View>
    )
  }

  return (
    <View style={styles.form}>
      <TitleWithCustomFont style={styles.title}>{t("creatingASession")}</TitleWithCustomFont>
      <View style={styles.labelInputContainer}>
        <Text style={styles.label}>{t("sessionName")}</Text>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              placeholder={t("sessionNamePlaceholder")}
              placeholderTextColor={theme.COLORS.LABEL}
              style={styles.input}
              value={value}
            />
          )}
          rules={{
            required: true,
          }}
        />
        {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}
      </View>
      <View style={styles.blocks}>
        <TitleWithCustomFont style={styles.blocksTitle}>{t("blocks")}</TitleWithCustomFont>
        <ScrollView contentContainerStyle={styles.blocksButtons}>
          {blockFields.map((item, index) => {
            return (
              <CustomButton
                icon={{ name: "create-new-folder" }}
                key={item.id}
                onPress={() => setOpenedBlockIndex(index)}
                theme="rectangle"
                title={`${t("block")} ${index + 1}`}
              />
            )
          })}
        </ScrollView>
        <Pressable
          onPress={() => append({ name: "", exercises: [], iterations: 1 })}
          style={styles.addBlockButton}
        >
          <MaterialIcons
            name="add"
            size={40}
            style={styles.addBlockButtonIcon}
          />
        </Pressable>
      </View>
      <CustomButton
        icon={{ name: "create-new-folder" }}
        onPress={handleSubmit(onSubmit)}
        style={styles.saveSessionButton}
        theme="rectangle"
        title={t("createTheSession")}
      />
    </View>
  );
}

export default CreateSessionForm;