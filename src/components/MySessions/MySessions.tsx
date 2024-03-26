import CustomButton from "@shared/CustomButton/CustomButton";
import useBoundedStore from "@store/store";
import * as React from "react"
import { useTranslation } from "react-i18next";
import { FlatList, View } from "react-native";
import { useStyles } from "react-native-unistyles";

import SessionButton from "./SessionButton/SessionButton";
import SessionForm from "./SessionForm/SessionForm";
import { styles as styleSheet } from "./mySessions.styles";

import type { SessionType } from "@/types";

function MySessions() {
  const { sessions } = useBoundedStore()
  const { t } = useTranslation()
  const { styles } = useStyles(styleSheet)
  const [sessionFormDisplayed, setSessionFormDisplayed] = React.useState(false)
  const [sessionToUpdate, setSessionToUpdate] = React.useState<null | SessionType>(null)

  function closeSessionForm() {
    setSessionFormDisplayed(false)
    setSessionToUpdate(null)
  }

  function displaySessionForm(sessionToUpdate: SessionType | null = null) {
    setSessionFormDisplayed(true)
    setSessionToUpdate(sessionToUpdate)
  }

  if (sessionFormDisplayed) {
    return (
      <SessionForm
        closeSessionForm={closeSessionForm}
        sessionToUpdate={sessionToUpdate}
      />
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        data={sessions}
        horizontal={false}
        renderItem={({ item: session }) => (
          <SessionButton
            session={session}
            setSessionToUpdate={setSessionToUpdate}
            setSessionFormDisplayed={setSessionFormDisplayed}
          />
        )}
        style={styles.listWrapper}
      />
      <CustomButton
        icon={{ name: "format-list-bulleted-add" }}
        onPress={() => displaySessionForm(null)}
        style={styles.createSessionButton}
        theme="rectangle"
        title={t("createASession")}
      />
    </View>
  );
}

export default MySessions