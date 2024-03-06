import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Pressable, TextInput, View, Text } from "react-native";

import { styles } from "./createSessionForm.styles"

import CustomButton from "@/components/CustomButton/CustomButton";
import TitleWithCustomFont from "@/components/TitleWithCustomFont/TitleWithCustomFont";

function CreateSessionForm() {
  return (
    <View style={styles.form}>
      <TitleWithCustomFont style={styles.title}>Création d'une séance</TitleWithCustomFont>
      <View style={styles.labelInputContainer}>
        <Text style={styles.label}>Nom de la séance</Text>
        <TextInput placeholder="Exemple : Cardio 5km" style={styles.input} />
      </View>
      <View style={styles.blocks}>
        <TitleWithCustomFont style={styles.blocksTitle}>Blocks</TitleWithCustomFont>
        <Pressable style={styles.addBlockButton}>
          <MaterialIcons name="add" size={40} />
        </Pressable>
      </View>
      <CustomButton
        icon={{ name: "create-new-folder" }}
        style={styles.saveSessionButton}
        theme="rectangle"
        title="Créer la séance"
      />
    </View>
  );
}

export default CreateSessionForm;