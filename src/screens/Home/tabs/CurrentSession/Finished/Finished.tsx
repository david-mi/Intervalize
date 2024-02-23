import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { TabActions } from "@react-navigation/native";
import * as React from "react"
import { View } from "react-native";

import { styles } from "./finished.styles";

import CustomButton from "@/components/CustomButton/CustomButton";
import TitleWithCustomFont from "@/components/TitleWithCustomFont/TitleWithCustomFont";
import { GlobalContext } from "@/context/GlobalContext";
import type { TabNavParamList } from "@/types";

type Props = Pick<BottomTabScreenProps<TabNavParamList, "Séance en cours">, "navigation">

function Finished({ navigation }: Props) {
  const { setSessionStatus } = React.useContext(GlobalContext)

  function handleRestartSession() {
    setSessionStatus("ACTIVE")
  }

  function redirectToMySessions() {
    const jumpToAction = TabActions.jumpTo("Mes séances");
    navigation.dispatch(jumpToAction);
  }

  return (
    <View style={styles.container}>
      <TitleWithCustomFont style={styles.title}>
        Session Terminée
      </TitleWithCustomFont>
      <View style={styles.buttonsContainer}>
        <CustomButton
          icon={{ name: "restart-alt" }}
          onPress={handleRestartSession}
          theme="rectangle"
          title="Recommencer"
        />
        <CustomButton
          icon={{ name: "format-list-bulleted" }}
          onPress={redirectToMySessions}
          theme="rectangle"
          title="Mes séances"
        />
      </View>
    </View>
  );
}

export default Finished;