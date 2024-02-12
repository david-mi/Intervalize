import * as React from "react"
import { View } from "react-native";

import { styles } from "./readyToStart.styles";

import CustomButton from "@/components/CustomButton/CustomButton";
import TitleWithCustomFont from "@/components/TitleWithCustomFont/TitleWithCustomFont";
import { GlobalContext } from "@/context/GlobalContext";
import type { Session } from "@/types";

function ReadyToStart() {
  const { currentSession, setSessionStatus } = React.useContext(GlobalContext)

  function onPress() {
    setSessionStatus("ACTIVE")
  }

  return (
    <View style={styles.container}>
      <TitleWithCustomFont style={styles.title}>{(currentSession as Session).name}</TitleWithCustomFont>
      <CustomButton
        icon={{ name: "play-circle" }}
        theme="rectangle"
        style={styles.button}
        title="Démarrer"
        onPress={onPress}
      />
    </View>
  );
}

export default ReadyToStart;