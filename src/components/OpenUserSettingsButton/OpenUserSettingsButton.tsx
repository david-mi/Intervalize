import { MaterialIcons } from "@expo/vector-icons";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as React from "react"
import { Pressable } from "react-native";

import { styles } from "./openUserSettingsButton.styles"

import type { RootStackParamList } from "@/types";

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">
}

function OpenUserSettingsButton({ navigation }: Props) {
  function onPress() {
    navigation.navigate("Settings")
  }

  return (
    <Pressable onPress={onPress} style={styles.button}>
      <MaterialIcons color="black" name="settings" size={40} />
    </Pressable>
  );
}

export default OpenUserSettingsButton;