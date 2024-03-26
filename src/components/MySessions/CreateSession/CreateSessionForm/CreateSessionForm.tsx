import { zodResolver } from "@hookform/resolvers/zod";
import CustomButton from "@shared/CustomButton/CustomButton";
import CustomLabelInputErrorWrapper from "@shared/CustomLabelInputErrorWrapper/CustomLabelInputErrorWrapper";
import TitleWithCustomFont from "@shared/TitleWithCustomFont/TitleWithCustomFont";
import { randomUUID } from "expo-crypto"
import React from "react";
import { useForm, useFieldArray } from "react-hook-form"
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { useStyles } from "react-native-unistyles";

import CreateBlock from "./CreateBlock/CreateBlock";
import SectionWrapper from "./SectionWrapper/SectionWrapper";
import { styles as styleSheet } from "./createSessionForm.styles"

import { sessionSchema } from "@/schemas";
import type { SessionType } from "@/types";

function CreateSessionForm() {
  const { t } = useTranslation()
  const { styles } = useStyles(styleSheet)
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<SessionType>({
    mode: "onChange",
    resolver: zodResolver(sessionSchema),
    defaultValues: {
      id: randomUUID(),
      createdAt: new Date(2024, 1, 1).toISOString(),
    },
  })
  const {
    fields: blocks,
    append: appendBlock,
    remove: removeBlock,
  } = useFieldArray({
    control,
    name: "blocks",
  });
  const [selectedBlockIndex, setSelectedBlockIndex] = React.useState<number | null>(null)
  const nameValue = watch("name")
  const isSessionNameValid = nameValue?.length > 0 && !errors.name

  function handleAppendBlock() {
    appendBlock({
      id: randomUUID(),
      name: `Block ${blocks.length + 1}`
      , exercises: [],
      iterations: 1,
    })
    setSelectedBlockIndex(blocks.length)
  }

  function onSubmit(data: SessionType) {
    console.log(data)
  }

  if (selectedBlockIndex !== null) {
    return (
      <CreateBlock
        control={control}
        errors={errors}
        isFormValid={isValid}
        removeBlock={removeBlock}
        selectedBlock={blocks[selectedBlockIndex]}
        selectedBlockIndex={selectedBlockIndex}
        setSelectedBlockIndex={setSelectedBlockIndex}
      />
    )
  }

  return (
    <View style={styles.form}>
      <TitleWithCustomFont style={styles.title}>{t("creatingASession")}</TitleWithCustomFont>
      <CustomLabelInputErrorWrapper
        control={control}
        defaultValue={nameValue}
        error={errors.name}
        label={t("sessionName")}
        name="name"
        placeholder={t("sessionNamePlaceholder")}
      />
      <SectionWrapper
        appendElementHandler={handleAppendBlock}
        buttonsDisabled={!isSessionNameValid}
        title={t("blocks")}
      >
        {blocks.map((item, index) => (
          <CustomButton
            disabled={!isSessionNameValid}
            icon={{ name: "create-new-folder" }}
            key={item.id}
            onPress={() => setSelectedBlockIndex(index)}
            theme="rectangle"
            title={`${t("block")} ${index + 1}`}
          />
        ))}
      </SectionWrapper>
      <CustomButton
        disabled={!isValid}
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