import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { TabActions } from "@react-navigation/native";
import * as React from "react"
import { View, FlatList, Alert } from "react-native";

import CreateSession from "./CreateSession/CreateSession";
import { styles } from "./mySessions.styles";

import CustomButton from "@/components/CustomButton/CustomButton";
import { GlobalContext } from "@/context/GlobalContext";
import type { Session, TabNavParamList } from "@/types";

type Props = BottomTabScreenProps<TabNavParamList, "Mes séances">

function MySessions({ navigation }: Props) {
  const {
    sessions,
    currentSession,
    setCurrentSession,
    sessionStatus,
    setSessionStatus,
  } = React.useContext(GlobalContext)

  function startNewSession(session: Session) {
    setCurrentSession(session)
    setSessionStatus("READY_TO_START")
    const jumpToAction = TabActions.jumpTo("Séance en cours");
    navigation.dispatch(jumpToAction);
  }

  function handlePress(sessionId: string) {
    const foundSession = sessions.find(session => session.id === sessionId)!

    if (foundSession.id === undefined) {
      return Alert.alert("Séance non trouvée")
    }

    const haveAnActiveSession = (
      currentSession !== null &&
      sessionStatus !== "READY_TO_START"
      && sessionStatus !== "FINISHED"
    )

    if (haveAnActiveSession) {
      Alert.alert(
        "Une session est en cours",
        "Sélectionner une nouvelle session ?",
        [
          { text: "Annuler", style: "cancel" },
          { text: "Démarrer", onPress: () => startNewSession(foundSession) },
        ]
      );
    } else {
      startNewSession(foundSession)
    }
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
      <CreateSession />
    </View>
  );
}

export default MySessions