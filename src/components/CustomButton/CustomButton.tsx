import { Pressable, View, Text } from "react-native";
import { ComponentProps } from "react";
import { styles } from "./customButton.styles";
import { MaterialIcons } from '@expo/vector-icons';


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
    ...props.style as Object
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