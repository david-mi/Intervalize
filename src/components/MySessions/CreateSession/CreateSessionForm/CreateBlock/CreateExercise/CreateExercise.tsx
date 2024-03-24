import { MaterialIcons } from "@expo/vector-icons";
import CustomButton from "@shared/CustomButton/CustomButton";
import CustomLabelInputErrorWrapper from "@shared/CustomLabelInputErrorWrapper/CustomLabelInputErrorWrapper";
import TitleWithCustomFont from "@shared/TitleWithCustomFont/TitleWithCustomFont";
import React from "react";
import { type Control, type FieldErrors, type UseFormGetValues } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Alert, Pressable, View, ScrollView } from "react-native";
import { useStyles } from "react-native-unistyles";

import { createExerciseStyles } from "./createExercise.styles";

import type { SessionType, ExerciseType } from "@/types";

interface CreateExerciseProps {
  exerciseErrors?: FieldErrors<ExerciseType>
  closeCreateExercise: () => void
  control: Control<SessionType>
  fieldArrayName: `blocks.${number}.exercises.${number}`
  removeExercise: () => void
  selectedExercise: ExerciseType
  updateExercise: (exercise: ExerciseType) => void
  getValues: UseFormGetValues<SessionType>
}
function CreateExercise(props: CreateExerciseProps) {
  const { exerciseErrors, closeCreateExercise, control, fieldArrayName, removeExercise, selectedExercise, updateExercise, getValues } = props

  const { t } = useTranslation()
  const { styles } = useStyles(createExerciseStyles)

  function handleCloseCreateExercise() {
    if (!exerciseErrors) return closeCreateExercise()

    Alert.alert(
      t("incompleteExercise"),
      t("deleteTheExercise"),
      [
        { text: t("abort"), style: "cancel" },
        {
          text: t("delete"), onPress: () => {
            closeCreateExercise()
            removeExercise()
          },
        },
      ]
    );
  }

  function handleModifyExercise() {
    console.log(selectedExercise)
    closeCreateExercise()
  }

  return (
    <View style={styles.createExercise}>
      <TitleWithCustomFont style={styles.title}>{t("creatingAnExercise")}</TitleWithCustomFont>
      <Pressable
        onPress={handleCloseCreateExercise}
        style={styles.closeModalButton}
      >
        <MaterialIcons name="close" style={styles.closeModalButtonIcon} />
      </Pressable>
      <ScrollView contentContainerStyle={styles.scrollable}>
        <View style={styles.inputs}>
          <CustomLabelInputErrorWrapper
            control={control}
            defaultValue={selectedExercise.name}
            error={exerciseErrors?.name}
            label={t("exerciseName")}
            name={`${fieldArrayName}.name`}
            placeholder={t("exerciseNamePlaceholder")}
          />
          <CustomLabelInputErrorWrapper
            control={control}
            defaultValue={String(selectedExercise.duration.minutes)}
            error={exerciseErrors?.duration?.minutes}
            keyboardType="numeric"
            label={t("minutes")}
            name={`${fieldArrayName}.duration.minutes`}
          />
          <CustomLabelInputErrorWrapper
            control={control}
            defaultValue={String(selectedExercise.duration.seconds)}
            error={exerciseErrors?.duration?.seconds}
            keyboardType="numeric"
            label={t("seconds")}
            name={`${fieldArrayName}.duration.seconds`}
          />
          <CustomLabelInputErrorWrapper
            control={control}
            defaultValue={selectedExercise.intensityLevel}
            error={exerciseErrors?.intensityLevel}
            label={t("intensityLevel")}
            name={`${fieldArrayName}.intensityLevel`}
          />
        </View>
        <CustomButton
          disabled={!!exerciseErrors}
          icon={{ name: "create-new-folder" }}
          onPress={handleModifyExercise}
          style={styles.saveSessionButton}
          theme="rectangle"
          title={t("createTheExercise")}
        />
      </ScrollView>
    </View>
  );
}

export default CreateExercise;