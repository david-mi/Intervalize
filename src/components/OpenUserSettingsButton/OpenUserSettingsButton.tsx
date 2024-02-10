import * as React from "react"
import { Pressable } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "@/types";
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from "./openUserSettingsButton.styles"

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">
}

function OpenUserSettingsButton({ navigation }: Props) {
  function onPress() {
    navigation.navigate("Settings")
  }

  return (
    <Pressable onPress={onPress} style={styles.button}>
      <MaterialIcons name="settings" size={40} color="black" />
    </Pressable>
  );
}

export default OpenUserSettingsButton;