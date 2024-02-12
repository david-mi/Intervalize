import { MaterialIcons } from "@expo/vector-icons";
import type { ComponentProps } from "react";
import { Pressable, Text, type StyleProp, type ViewStyle, type TextStyle } from "react-native";

import { styles } from "./customButton.styles";

type RectangleButtonProps = ComponentProps<typeof Pressable> & {
  theme: "rectangle"
  title: string
  icon?: ComponentProps<typeof MaterialIcons>
}

type ControlButtonProps = ComponentProps<typeof Pressable> & {
  theme: "control"
  icon: ComponentProps<typeof MaterialIcons>
}

type Props = RectangleButtonProps | ControlButtonProps | ComponentProps<typeof Pressable>;

function CustomButton({ style, disabled, ...props }: Props) {
  const defaultButtonStyles = [style as StyleProp<ViewStyle>, disabled && styles.disabledButton]

  if ("theme" in props === false) {
    return (
      <Pressable
        {...props}
        disabled={disabled}
        style={defaultButtonStyles}
      />
    )
  }

  switch (props.theme) {
    case "rectangle": {
      return (
        <Pressable
          {...props}
          disabled={disabled}
          style={[styles.rectangle, ...defaultButtonStyles]}
        >
          <Text style={styles.text}>{props.title}</Text>
          {props.icon && (
            <MaterialIcons
              {...props.icon}
              style={[
                styles.rectangleIcon,
                disabled && styles.disabledIcon,
                props.icon.style,
                props.icon.color ? { color: props.icon.color } : undefined,
                props.icon.size ? { fontSize: props.icon.size } : undefined,
              ]}
            />
          )}
        </Pressable>
      )
    }
    case "control": {
      return (
        <Pressable
          {...props}
          disabled={disabled}
          style={[styles.control, ...defaultButtonStyles]}
        >
          <MaterialIcons
            {...props.icon}
            style={[
              styles.controlIcon,
              disabled && styles.disabledIcon,
              props.icon.style,
              props.icon.color ? { color: props.icon.color } : undefined,
              props.icon.size ? { fontSize: props.icon.size } : undefined,
            ]}
          />
        </Pressable>
      )
    }
  }
}

export default CustomButton;