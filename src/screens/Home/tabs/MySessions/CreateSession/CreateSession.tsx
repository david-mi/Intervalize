import { MaterialIcons } from "@expo/vector-icons";
import React from "react"
import { Modal, Pressable, Text, TextInput, View } from "react-native";

import { styles } from "./createSession.styles"

import CustomButton from "@/components/CustomButton/CustomButton";
import TitleWithCustomFont from "@/components/TitleWithCustomFont/TitleWithCustomFont";

function CreateSession() {
  const [displayModal, setDisplayModal] = React.useState(false)

  function toggleModal() {
    setDisplayModal((displayModal) => !displayModal)
  }

  return (
    <View>
      <CustomButton
        icon={{ name: "format-list-bulleted-add" }}
        onPress={toggleModal}
        style={styles.createSessionButton}
        theme="rectangle"
        title="Créer une séance"
      />
      {displayModal && (
        <Modal animationType="slide">
          <Pressable onPress={toggleModal} style={styles.closeModalButton}>
            <MaterialIcons name="close" style={styles.closeModalButtonIcon} />
          </Pressable>
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
        </Modal>
      )}
    </View>
  );
}

export default CreateSession;