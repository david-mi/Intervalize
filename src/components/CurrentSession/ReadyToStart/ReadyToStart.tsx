import { View } from "react-native";
import * as React from "react"
import { GlobalContext } from "@/context/GlobalContext";
import CustomButton from "@/components/CustomButton/CustomButton";
import TitleWithCustomFont from "@/components/TitleWithCustomFont/TitleWithCustomFont";
import { Session } from "@/types";
import { styles } from "./readyToStart.styles";

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
        style={styles.button}
        title={"Démarrer"}
        onPress={onPress}
      />
    </View>
  );
}

export default ReadyToStart;