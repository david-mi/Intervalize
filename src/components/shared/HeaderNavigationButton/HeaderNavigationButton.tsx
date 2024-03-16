import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import * as React from "react"
import type { StyleProp, TextStyle } from "react-native";

import { styles } from "./headerNavigationButton.styles"

import { THEME } from "@/constants/theme";

interface Props {
  iconProps: React.ComponentProps<typeof MaterialIcons>
  screenDestination: string
  style?: StyleProp<TextStyle>
}

function HeaderNavigationButton({ iconProps, screenDestination, style: customStyle }: Props) {
  const linkStyles = [styles.link, customStyle]

  return (
    <Link
      asChild
      href={screenDestination}
      style={linkStyles}
    >
      <MaterialIcons
        {...iconProps}
        color={THEME.COLORS.HEADER_TEXT}
        size={24}
      />
    </Link>
  );
}

export default HeaderNavigationButton;