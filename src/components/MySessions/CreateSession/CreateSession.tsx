import { MaterialIcons } from "@expo/vector-icons";
import CustomButton from "@shared/CustomButton/CustomButton";
import React from "react"
import { useTranslation } from "react-i18next";
import { Modal, Pressable, View } from "react-native";
import { useStyles } from "react-native-unistyles";

import CreateSessionForm from "./CreateSessionForm/CreateSessionForm";
import { styles as styleSheet } from "./createSession.styles"

function CreateSession() {
  const [displayModal, setDisplayModal] = React.useState(false)
  const { t } = useTranslation()
  const { styles } = useStyles(styleSheet)

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