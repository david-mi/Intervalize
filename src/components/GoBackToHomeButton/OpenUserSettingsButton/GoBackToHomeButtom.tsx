import { MaterialIcons } from "@expo/vector-icons";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as React from "react"
import { Pressable } from "react-native";

import { styles } from "./goBackToHomeButton.styles"

import type { RootStackParamList } from "@/types";

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">
}

function GoBackToHomeButton({ navigation }: Props) {
  function onPress() {
    navigation.navigate("Home")
  }

  return (
    <Pressable onPress={onPress} style={styles.button}>
      <MaterialIcons
        color="black"
        name="home"
        size={40}
      />
    </Pressable>
  );
}

export default GoBackToHomeButton;