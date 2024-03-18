import type { ComponentProps } from "react";
import { Text } from "react-native";
import { useStyles } from "react-native-unistyles";

import { styles as styleSheet } from "./titleWithCustomFont.styles";

type Props = ComponentProps<typeof Text> & {
  children: string | string[]
}

function TitleWithCustomFont({ children, ...props }: Props) {
  const { styles } = useStyles(styleSheet)

  const titleStyles = {
    ...styles.title,
    ...props.style as object,
  }

  return (
    <Text {...props} style={titleStyles}>
      {children}
    </Text>
  );
}

export default TitleWithCustomFont;