import * as React from "react"
import { GlobalContext } from "../../../context/GlobalContext";
import { Text, View } from "react-native";
import { TabActions } from '@react-navigation/native';
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { TabNavParamList } from "../../../types";
import CustomButton from "../../CustomButton/CustomButton";
import { styles } from "./finished.styles";
import TitleWithCustomFont from "../../TitleWithCustomFont/TitleWithCustomFont";

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
          title="Mes sessions"
          onPress={redirectToMySessions}
        />
      </View>
    </View>
  );
}

export default Finished;