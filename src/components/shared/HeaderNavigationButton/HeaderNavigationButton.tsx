import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import * as React from "react"
import { Pressable } from "react-native";

import { globalStyle } from "@/styles/styles.variables.global";

interface Props {
  iconProps: React.ComponentProps<typeof MaterialIcons>
  screenDestination: string
  buttonProps?: Omit<React.ComponentProps<typeof Pressable>, "onPress">
}

function HeaderNavigationButton({ iconProps, screenDestination, buttonProps }: Props) {
  return (
    <Link asChild href={screenDestination}>
      <Pressable {...buttonProps}>
        <MaterialIcons
          {...iconProps}
          color={globalStyle.headerColor}
          size={24}
        />
      </Pressable>
    </Link>
  );
}

export default HeaderNavigationButton;