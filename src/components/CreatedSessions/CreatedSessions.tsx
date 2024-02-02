import * as React from "react"
import { View, Text, FlatList, Button } from "react-native";
import { GlobalContext } from "../../context/GlobalContext";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { Session, TabNavParamList } from "../../types";

type Props = BottomTabScreenProps<TabNavParamList, "Mes sessions">

function CreatedSessions({ navigation }: Props) {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Mes Sessions</Text>
      <FlatList
        data={sessions}
        renderItem={({ item }) => <Button title={item.name} />}
      />
    </View>
  );
}

export default CreatedSessions