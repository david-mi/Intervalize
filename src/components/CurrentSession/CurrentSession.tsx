import * as React from 'react';
import { Text, View } from 'react-native';
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import SessionTimer from "./SessionTimer/SessionTimer";
import StepTimer from "./StepTimer/StepTimer";

function CurrentSession() {
  const { sessionStatus } = useContext(GlobalContext)

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {sessionStatus === "STARTED"
        ? (
          <>
            <SessionTimer />
            <StepTimer />
          </>
        )
        : <Text> Session Terminée</Text>
      }
    </View>
  );
}

export default CurrentSession;