import { View, Button, Text } from "react-native";
import * as React from "react"
import { GlobalContext } from "../../../context/GlobalContext";

function ReadyToStart() {
  const { currentSession, setSessionStatus } = React.useContext(GlobalContext)

  function onPress() {
    setSessionStatus("ACTIVE")
  }

  return (
    <View>
      <Text>{currentSession?.name}</Text>
      <Button title={"Démarrer"} onPress={onPress} />
    </View>
  );
}

export default ReadyToStart;