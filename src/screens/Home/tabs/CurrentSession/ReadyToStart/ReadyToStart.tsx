import * as React from "react"
import { View } from "react-native";

import { styles } from "./readyToStart.styles";

import CustomButton from "@/components/CustomButton/CustomButton";
import TitleWithCustomFont from "@/components/TitleWithCustomFont/TitleWithCustomFont";
import useBoundedStore from "@/store/store";
import type { Session } from "@/types";

function ReadyToStart() {
  const { currentSession, setSessionStatus } = useBoundedStore()

  function onPress() {
    setSessionStatus("ACTIVE")
  }

  return (
    <View style={styles.container}>
      <TitleWithCustomFont style={styles.title}>{(currentSession as Session).name}</TitleWithCustomFont>
      <CustomButton
        icon={{ name: "play-circle" }}
        onPress={onPress}
        style={styles.button}
        theme="rectangle"
        title="Démarrer"
      />
    </View>
  );
}

export default ReadyToStart;