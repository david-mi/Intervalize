import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import * as React from "react"
import type { StyleProp, TextStyle } from "react-native";
import { useStyles } from "react-native-unistyles";

import { styles as styleSheet } from "./headerNavigationButton.styles"

interface Props {
  iconProps: React.ComponentProps<typeof MaterialIcons>
  screenDestination: string
  style?: StyleProp<TextStyle>
}

function HeaderNavigationButton({ iconProps, screenDestination, style: customStyle }: Props) {
  const { styles, theme } = useStyles(styleSheet)
  const linkStyles = [styles.link, customStyle]

  return (
    <Link
      asChild
      href={screenDestination}
      style={linkStyles}
    >
      <MaterialIcons
        {...iconProps}
        color={theme.COLORS.HEADER_TEXT}
        size={24}
      />
    </Link>
  );
}

export default HeaderNavigationButton;