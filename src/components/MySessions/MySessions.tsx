import CustomButton from "@shared/CustomButton/CustomButton";
import useBoundedStore from "@store/store";
import { router } from "expo-router";
import * as React from "react"
import { useTranslation } from "react-i18next";
import { View, FlatList, Alert } from "react-native";
import { useStyles } from "react-native-unistyles";

import SessionForm from "./SessionForm/SessionForm";
import { styles as styleSheet } from "./mySessions.styles";

import type { SessionType } from "@/types";

function MySessions() {
  const {
    sessions,
    currentSession,
    setCurrentSession,
    sessionStatus,
    setSessionStatus,
  } = useBoundedStore()
  const { t } = useTranslation()
  const { styles } = useStyles(styleSheet)
  const [displaySessionForm, setDisplaySessionForm] = React.useState(false)

  function toggleSessionForm() {
    setDisplaySessionForm((displaySessionForm) => !displaySessionForm)
  }

  function startNewSession(session: SessionType) {
    setCurrentSession(session)
    setSessionStatus("READY_TO_START")
    router.navigate("/")
  }

  function handlePress(sessionId: string) {
    const foundSession = sessions.find(session => session.id === sessionId)!

    if (foundSession.id === undefined) {
      return Alert.alert(t("sessionNotFound"))
    }

    const haveAnActiveSession = (
      currentSession !== null &&
      sessionStatus !== "READY_TO_START"
      && sessionStatus !== "FINISHED"
    )

    if (haveAnActiveSession) {
      Alert.alert(
        t("sessionIsRunning"),
        t("startANewSession"),
        [
          { text: t("abort"), style: "cancel" },
          { text: t("start"), onPress: () => startNewSession(foundSession) },
        ]
      );
    } else {
      startNewSession(foundSession)
    }
  }

  if (displaySessionForm) {
    return (
      <SessionForm
        toggleSessionForm={toggleSessionForm}
      />
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        data={sessions}
        horizontal={false}
        renderItem={({ item }) => {
          return (
            <CustomButton
              icon={{ name: "touch-app" }}
              onPress={() => handlePress(item.id)}
              theme="rectangle"
              title={item.name}
            />
          )
        }}
        style={styles.listWrapper}
      />
      <CustomButton
        icon={{ name: "format-list-bulleted-add" }}
        onPress={toggleSessionForm}
        style={styles.createSessionButton}
        theme="rectangle"
        title={t("createASession")}
      />
    </View>
  );
}

export default MySessions