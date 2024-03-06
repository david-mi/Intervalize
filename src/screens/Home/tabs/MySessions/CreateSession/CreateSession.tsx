import { MaterialIcons } from "@expo/vector-icons";
import React from "react"
import { Modal, Pressable, View } from "react-native";

import CreateSessionForm from "./CreateSessionForm/CreateSessionForm";
import { styles } from "./createSession.styles"

import CustomButton from "@/components/CustomButton/CustomButton";

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
          <CreateSessionForm />
        </Modal>
      )}
    </View>
  );
}

export default CreateSession;