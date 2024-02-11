import { MaterialIcons } from "@expo/vector-icons";
import type { ComponentProps } from "react";
import { Pressable, Text } from "react-native";

import { styles } from "./customButton.styles";

type Props = ComponentProps<typeof Pressable> & {
  title: string
  icon?: {
    name: keyof typeof MaterialIcons.glyphMap
    size?: number
    color?: string
  }
}

function CustomButton({ title, icon, ...props }: Props) {
  const customButtonStyles = {
    ...styles.button,
    ...props.style as object,
  }

  return (
    <Pressable {...props} style={customButtonStyles}>
      <Text style={styles.text}>{title}</Text>
      {icon && (
        <MaterialIcons
          name={icon.name}
          size={icon.size || 24}
          color={icon.color || "white"} />
      )}
    </Pressable>
  );
}

export default CustomButton;