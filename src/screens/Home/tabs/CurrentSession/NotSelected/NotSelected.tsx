import { View } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { TabActions } from '@react-navigation/native';
import { TabNavParamList } from "@/types";
import CustomButton from "@/components/CustomButton/CustomButton";
import TextWithCustomFont from "@/components/TextWithCustomFont/TextWithCustomFont";
import TitleWithCustomFont from "@/components/TitleWithCustomFont/TitleWithCustomFont";
import { styles } from "./notSelected.styles";

type Props = Pick<BottomTabScreenProps<TabNavParamList, "Séance en cours">, "navigation">

function NotSelected({ navigation }: Props) {

  function redirectToMySessions() {
    const jumpToAction = TabActions.jumpTo("Mes séances");
    navigation.dispatch(jumpToAction);
  }

  return (
    <View style={styles.container}>
      <View style={styles.infos}>
        <TitleWithCustomFont style={styles.title}>Pas de séance sélectionnée</TitleWithCustomFont>
        <TextWithCustomFont style={styles.instructions}>Veuillez choisir une séance à lancer</TextWithCustomFont>
      </View>
      <CustomButton
        icon={{ name: "format-list-bulleted" }}
        title="Mes séances"
        style={styles.button}
        onPress={redirectToMySessions}
      />
    </View>
  );
}

export default NotSelected;