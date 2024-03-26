import { MaterialIcons } from "@expo/vector-icons";
import CustomButton from "@shared/CustomButton/CustomButton";
import CustomLabelInputErrorWrapper from "@shared/CustomLabelInputErrorWrapper/CustomLabelInputErrorWrapper";
import TitleWithCustomFont from "@shared/TitleWithCustomFont/TitleWithCustomFont";
import { randomUUID } from "expo-crypto"
import React from "react";
import { useFieldArray, type Control, type FieldErrors, type UseFormGetValues } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Alert, Pressable, ScrollView, View } from "react-native";
import { useStyles } from "react-native-unistyles";

import EditExercise from "./EditExercise/EditExercise";
import { editBlockStyles } from "./editBlock.styles"
import SectionWrapper from "../SectionWrapper/SectionWrapper";

import type { BlockType, SessionType, ExerciseType } from "@/types";

interface EditBlockProps {
  blockErrors?: FieldErrors<BlockType>
  closeEditBlock: () => void
  control: Control<SessionType>
  fieldArrayName: `blocks.${number}`
  isFormValid: boolean
  removeBlock: () => void
  selectedBlock: BlockType
  getValues: UseFormGetValues<SessionType>
  updateBlock: (block: BlockType) => void
}

function EditBlock(props: EditBlockProps) {
  const { blockErrors, closeEditBlock, control, isFormValid, fieldArrayName, removeBlock, selectedBlock, getValues, updateBlock } = props

  const { t } = useTranslation()
  const { styles } = useStyles(editBlockStyles)
  const {
    fields: exercises,
    append: appendExercise,
    remove: removeExercise,
    update: updateExercise,
  } = useFieldArray({
    control,
    name: `${fieldArrayName}.exercises`,
  });
  const [selectedExerciseIndex, setSelectedExerciseIndex] = React.useState<number | null>(null)

  function handleAppendExercise() {
    appendExercise({
      name: `${t("exercise")} ${exercises.length + 1}`,
      id: randomUUID(),
      duration: {
        minutes: 0,
        seconds: 15,
      },
      intensityLevel: "MEDIUM",
    })
    setSelectedExerciseIndex(exercises.length)
  }

  function handleCloseEditBlock() {
    if (isFormValid) return closeEditBlock()

    Alert.alert(
      t("incompleteBlock"),
      t("deleteTheBlock"),
      [
        { text: t("abort"), style: "cancel" },
        {
          text: t("delete"), onPress: () => {
            closeEditBlock()
            removeBlock()
          },
        },
      ]
    );
  }

  function handleModifyBlock() {
    updateBlock(getValues(fieldArrayName))
    closeEditBlock()
  }

  if (selectedExerciseIndex !== null) {
    return (
      <EditExercise
        closeEditExercise={() => setSelectedExerciseIndex(null)}
        control={control}
        exerciseErrors={blockErrors?.exercises?.[selectedExerciseIndex]}
        fieldArrayName={`${fieldArrayName}.exercises.${selectedExerciseIndex}`}
        getValues={getValues}
        removeExercise={() => removeExercise(selectedExerciseIndex)}
        selectedExercise={exercises[selectedExerciseIndex]}
        updateExercise={(exercise: ExerciseType) => updateExercise(selectedExerciseIndex, exercise)}
      />
    )
  }

  return (
    <View style={styles.editBlock}>
      <TitleWithCustomFont style={styles.title}>{t("blockEdition")}</TitleWithCustomFont>
      <Pressable
        onPress={handleCloseEditBlock}
        style={styles.closeModalButton}
      >
        <MaterialIcons name="close" style={styles.closeModalButtonIcon} />
      </Pressable>
      <ScrollView contentContainerStyle={styles.scrollable}>
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
          appendElementHandler={handleAppendExercise}
          buttonsDisabled={!!blockErrors?.name || !!blockErrors?.iterations}
          title={t("exercises")}
        >
          {exercises.map((item, index) => (
            <CustomButton
              disabled={!!blockErrors?.name || !!blockErrors?.iterations}
              icon={{ name: "directions-run" }}
              key={item.id}
              onPress={() => setSelectedExerciseIndex(index)}
              theme="rectangle"
              title={item.name}
            />
          ))}
        </SectionWrapper>
        <CustomButton
          disabled={!isFormValid}
          icon={{ name: "save" }}
          onPress={handleModifyBlock}
          style={styles.saveBlockButton}
          theme="rectangle"
          title={t("saveBlock")}
        />
      </ScrollView>
    </View>
  );
}

export default EditBlock;