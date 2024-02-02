import { View, Text, Button } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { TabActions } from '@react-navigation/native';
import { TabNavParamList } from "../../../types";

type Props = Pick<BottomTabScreenProps<TabNavParamList, "Session en cours">, "navigation">

function NotSelected({ navigation }: Props) {

  function onPress() {
    const jumpToAction = TabActions.jumpTo("Mes sessions");
    navigation.dispatch(jumpToAction);
  }

  return (
    <View>
      <Text>Pas de session sélectionnée</Text>
      <Text>Veuillez choisir une session à lancer</Text>
      <Button title="Mes sessions" onPress={onPress} />
    </View>
  );
}

export default NotSelected;