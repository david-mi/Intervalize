import { MaterialIcons } from "@expo/vector-icons";
import React from "react"
import { useTranslation } from "react-i18next";
import { Modal, Pressable, View } from "react-native";

import CreateSessionForm from "./CreateSessionForm/CreateSessionForm";
import { styles } from "./createSession.styles"

import CustomButton from "@/components/CustomButton/CustomButton";

function CreateSession() {
  const [displayModal, setDisplayModal] = React.useState(false)
  const { t } = useTranslation()

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
        title={t("createASession")}
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