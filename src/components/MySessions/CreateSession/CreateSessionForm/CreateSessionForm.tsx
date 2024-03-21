import { zodResolver } from "@hookform/resolvers/zod";
import CustomButton from "@shared/CustomButton/CustomButton";
import CustomLabelInputErrorWrapper from "@shared/CustomLabelInputErrorWrapper/CustomLabelInputErrorWrapper";
import TitleWithCustomFont from "@shared/TitleWithCustomFont/TitleWithCustomFont";
import React from "react";
import { useForm, useFieldArray } from "react-hook-form"
import { useTranslation } from "react-i18next";
import { View, ScrollView } from "react-native";
import { useStyles } from "react-native-unistyles";

import CreateBlock from "./CreateBlock/CreateBlock";
import { styles as styleSheet } from "./createSessionForm.styles"

import { sessionSchema } from "@/schemas";
import type { SessionType } from "@/types";

function CreateSessionForm() {
  const { t } = useTranslation()
  const { styles } = useStyles(styleSheet)
  const {
    control,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<SessionType>({
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
  console.log(errors)
  function onSubmit(data: SessionType) {
    console.log(data)
  }

  async function handleAddBlockButtonPress() {
    const isSessionNameValid = await trigger("name")
    if (!isSessionNameValid) return

    append({ name: "", exercises: [], iterations: 1 })
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
      <CustomLabelInputErrorWrapper
        control={control}
        error={errors.name}
        label={t("sessionName")}
        name="name"
        placeholder={t("sessionNamePlaceholder")}
      />
      <View style={styles.blocks}>
        <View style={styles.heading}>
          <TitleWithCustomFont style={styles.blocksTitle}>{t("blocks")}</TitleWithCustomFont>
          <CustomButton
            disabled={!!errors.name}
            icon={{ name: "add", style: styles.addBlockButtonIcon }}
            onPress={handleAddBlockButtonPress}
            style={styles.addBlockButton}
            theme="control"
          />
        </View>
        <ScrollView contentContainerStyle={styles.blocksButtons}>
          {blockFields.map((item, index) => {
            return (
              <CustomButton
                disabled={!!errors.name}
                icon={{ name: "create-new-folder" }}
                key={item.id}
                onPress={() => setSelectedBlockIndex(index)}
                theme="rectangle"
                title={`${t("block")} ${index + 1}`}
              />
            )
          })}
        </ScrollView>
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