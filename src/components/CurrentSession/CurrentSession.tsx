import * as React from 'react';
import { Text, View } from 'react-native';
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import SessionTimer from "./SessionTimer/SessionTimer";
import StepTimer from "./StepTimer/StepTimer";
import { SessionStatus } from "../../types";

function CurrentSession() {
  const { sessionStatus } = useContext(GlobalContext)
  console.log(sessionStatus)
  const sessionComponents: { [key in SessionStatus]: React.JSX.Element } = {
    NOT_SELECTED: <Text>Pas de session sélectionnée</Text>,
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