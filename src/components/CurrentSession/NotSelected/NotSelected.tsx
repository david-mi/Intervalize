import { View } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { TabActions } from '@react-navigation/native';
import { TabNavParamList } from "@/types";
import CustomButton from "@/components/CustomButton/CustomButton";
import TextWithCustomFont from "@/components/TextWithCustomFont/TextWithCustomFont";
import TitleWithCustomFont from "@/components/TitleWithCustomFont/TitleWithCustomFont";
import { styles } from "./notSelected.styles";

type Props = Pick<BottomTabScreenProps<TabNavParamList, "Session en cours">, "navigation">

function NotSelected({ navigation }: Props) {

  function redirectToMySessions() {
    const jumpToAction = TabActions.jumpTo("Mes sessions");
    navigation.dispatch(jumpToAction);
  }

  return (
    <View style={styles.container}>
      <View style={styles.infos}>
        <TitleWithCustomFont style={styles.title}>Pas de session sélectionnée</TitleWithCustomFont>
        <TextWithCustomFont style={styles.instructions}>Veuillez choisir une session à lancer</TextWithCustomFont>
      </View>
      <CustomButton
        icon={{ name: "format-list-bulleted" }}
        title="Mes sessions"
        style={styles.button}
        onPress={redirectToMySessions}
      />
    </View>
  );
}

export default NotSelected;