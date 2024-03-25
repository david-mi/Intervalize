import { MaterialIcons } from "@expo/vector-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomButton from "@shared/CustomButton/CustomButton";
import CustomLabelInputErrorWrapper from "@shared/CustomLabelInputErrorWrapper/CustomLabelInputErrorWrapper";
import TitleWithCustomFont from "@shared/TitleWithCustomFont/TitleWithCustomFont";
import { sessionSchema } from "@validation/schemas/session/session";
import { randomUUID } from "expo-crypto"
import React from "react";
import { useForm, useFieldArray } from "react-hook-form"
import { useTranslation } from "react-i18next";
import { Pressable, View } from "react-native";
import { useStyles } from "react-native-unistyles";

import EditBlock from "./EditBlock/EditBlock";
import SectionWrapper from "./SectionWrapper/SectionWrapper";
import { styles as styleSheet } from "./sessionForm.styles"

import type { BlockType, SessionType } from "@/types";

interface Props {
  toggleSessionForm: () => void
}

function SessionForm({ toggleSessionForm }: Props) {
  const { t } = useTranslation()
  const { styles } = useStyles(styleSheet)
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    getValues,
  } = useForm<SessionType>({
    mode: "onChange",
    resolver: zodResolver(sessionSchema),
    defaultValues: {
      name: "",
      id: randomUUID(),
      createdAt: new Date(2024, 1, 1).toISOString(),
    },
  })
  const {
    fields: blocks,
    append: appendBlock,
    remove: removeBlock,
    update: updateBlock,
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
      <EditBlock
        blockErrors={errors.blocks?.[selectedBlockIndex]}
        closeEditBlock={() => setSelectedBlockIndex(null)}
        control={control}
        fieldArrayName={`blocks.${selectedBlockIndex}` as const}
        getValues={getValues}
        isFormValid={isValid}
        removeBlock={() => removeBlock(selectedBlockIndex)}
        selectedBlock={blocks[selectedBlockIndex]}
        updateBlock={(block: BlockType) => updateBlock(selectedBlockIndex, block)}
      />
    )
  }

  return (
    <View style={styles.sessionForm}>
      <TitleWithCustomFont style={styles.title}>{t("creatingASession")}</TitleWithCustomFont>
      <Pressable onPress={toggleSessionForm} style={styles.closeModalButton}>
        <MaterialIcons name="close" style={styles.closeModalButtonIcon} />
      </Pressable>
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
            title={item.name}
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

export default SessionForm;