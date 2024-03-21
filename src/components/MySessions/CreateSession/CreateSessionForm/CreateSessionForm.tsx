import { MaterialIcons } from "@expo/vector-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomButton from "@shared/CustomButton/CustomButton";
import TitleWithCustomFont from "@shared/TitleWithCustomFont/TitleWithCustomFont";
import React from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form"
import { useTranslation } from "react-i18next";
import { Pressable, TextInput, View, Text, ScrollView } from "react-native";
import { useStyles } from "react-native-unistyles";
import { z } from "zod";

import CreateBlock from "./CreateBlock/CreateBlock";
import { styles as styleSheet } from "./createSessionForm.styles"

import { sessionSchema } from "@/schemas";
import type { SessionType } from "@/types";

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
  const [openedBlockIndex, setSelectedBlockIndex] = React.useState<number | null>(null)

  function onSubmit(data: SessionType) {
    console.log(data)
  }

  if (openedBlockIndex !== null) {
    return (
      <CreateBlock
        control={control}
        errors={errors}
        openedBlockIndex={openedBlockIndex}
        setSelectedBlockIndex={setSelectedBlockIndex}
      />
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
                onPress={() => setSelectedBlockIndex(index)}
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