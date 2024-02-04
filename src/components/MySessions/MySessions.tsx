import * as React from "react"
import { View, Text, FlatList, Button, Alert } from "react-native";
import { GlobalContext } from "../../context/GlobalContext";
import { TabActions } from '@react-navigation/native';
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { Session, TabNavParamList } from "../../types";

type Props = BottomTabScreenProps<TabNavParamList, "Mes sessions">

function MySessions({ navigation }: Props) {
  const {
    sessions,
    currentSession,
    setCurrentSession,
    sessionStatus,
    setSessionStatus
  } = React.useContext(GlobalContext)

  function startNewSession(session: Session) {
    setCurrentSession(session)
    setSessionStatus("READY_TO_START")
    const jumpToAction = TabActions.jumpTo("Session en cours");
    navigation.dispatch(jumpToAction);
  }

  function handlePress(sessionId: string) {
    const foundSession = sessions.find(session => session.id === sessionId)!

    if (foundSession.id === undefined) {
      return Alert.alert("Session non trouvée")
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
          { text: "Annuler", style: "cancel", },
          { text: "Démarrer", onPress: () => startNewSession(foundSession) }
        ]
      );
    } else {
      startNewSession(foundSession)
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Mes Sessions</Text>
      <FlatList
        data={sessions}
        renderItem={({ item }) => {
          return <Button onPress={() => handlePress(item.id)} title={item.name} />
        }}
      />
    </View>
  );
}

export default MySessions