import * as React from 'react';
import { Text, View } from 'react-native';
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import SessionTimer from "./SessionTimer/SessionTimer";
import StepTimer from "./StepTimer/StepTimer";
import { SessionStatus } from "../../types";
import NotSelected from "./NotSelected/NotSelected";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { Session, TabNavParamList } from "../../types";

type Props = BottomTabScreenProps<TabNavParamList, "Session en cours">

function CurrentSession({ navigation }: Props) {
  const { sessionStatus } = useContext(GlobalContext)

  const sessionComponents: { [key in SessionStatus]: React.JSX.Element } = {
    NOT_SELECTED: <NotSelected navigation={navigation} />,
    READY_TO_START: <Text>Prêt à démarrer</Text>,
    ACTIVE: (
      <>
        <SessionTimer />
        <StepTimer />
      </>
    ),
    PAUSED: <Text>Session en pause</Text>,
    FINISHED: <Text>Session Terminée</Text>
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {sessionComponents[sessionStatus]}
    </View>
  );
}

export default CurrentSession;