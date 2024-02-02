import * as React from "react"
import { GlobalContext } from "../../../context/GlobalContext";
import { Button, Text, View } from "react-native";
import { TabActions } from '@react-navigation/native';
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { TabNavParamList } from "../../../types";

type Props = Pick<BottomTabScreenProps<TabNavParamList, "Session en cours">, "navigation">

function Finished({ navigation }: Props) {
  const { setSessionStatus } = React.useContext(GlobalContext)

  function handleRestartSession() {
    setSessionStatus("ACTIVE")
  }

  function redirectToMySessions() {
    const jumpToAction = TabActions.jumpTo("Mes sessions");
    navigation.dispatch(jumpToAction);
  }

  return (
    <View>
      <Text>Session Terminée</Text>
      <Button title="Recommencer" onPress={handleRestartSession} />
      <Button title="Mes sessions" onPress={redirectToMySessions} />
    </View>
  );
}

export default Finished;