import * as React from "react"
import { GlobalContext } from "@/context/GlobalContext";
import { View } from "react-native";
import { TabActions } from '@react-navigation/native';
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import type { TabNavParamList } from "@/types";
import CustomButton from "@/components/CustomButton/CustomButton";
import { styles } from "./finished.styles";
import TitleWithCustomFont from "@/components/TitleWithCustomFont/TitleWithCustomFont";

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
          title="Recommencer"
          onPress={handleRestartSession}
        />
        <CustomButton
          icon={{ name: "format-list-bulleted" }}
          title="Mes séances"
          onPress={redirectToMySessions}
        />
      </View>
    </View>
  );
}

export default Finished;