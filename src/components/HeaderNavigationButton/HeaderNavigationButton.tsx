import { MaterialIcons } from "@expo/vector-icons";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as React from "react"
import { Pressable } from "react-native";

import type { RootStackParamList } from "@/types";

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">
  iconProps: React.ComponentProps<typeof MaterialIcons>
  screenDestination: keyof RootStackParamList
  buttonProps?: Omit<React.ComponentProps<typeof Pressable>, "onPress">
}

function HeaderNavigationButton({ navigation, iconProps, screenDestination, buttonProps }: Props) {
  function onPress() {
    navigation.navigate(screenDestination)
  }

  return (
    <Pressable {...buttonProps} onPress={onPress}>
      <MaterialIcons
        {...iconProps}
        color="black"
        size={24}
      />
    </Pressable>
  );
}

export default HeaderNavigationButton;