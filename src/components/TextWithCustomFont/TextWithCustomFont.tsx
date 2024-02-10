import { Text } from "react-native";
import type { CustomFont } from "@/types";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof Text> & {
  fontFamily?: CustomFont
  children: (string | number) | (string | number)[]
}

function TextWithCustomFont({ fontFamily = "oswald-regular", children, ...props }: Props) {
  const textStyles = {
    fontFamily,
    ...props.style as Object
  }

  return (
    <Text {...props} style={textStyles}>
      {children}
    </Text>
  );
}

export default TextWithCustomFont;