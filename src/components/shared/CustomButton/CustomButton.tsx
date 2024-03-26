import { MaterialIcons } from "@expo/vector-icons";
import { type ComponentProps, forwardRef } from "react";
import { Pressable, Text, type StyleProp, type ViewStyle } from "react-native";
import { useStyles } from "react-native-unistyles";

import { styles as styleSheet } from "./customButton.styles";

type RectangleButtonProps = ComponentProps<typeof Pressable> & {
  theme: "rectangle"
  title: string
  icon?: ComponentProps<typeof MaterialIcons>
}

type ControlButtonProps = ComponentProps<typeof Pressable> & {
  theme: "control"
  icon: ComponentProps<typeof MaterialIcons>
}

type NavigationButtonProps = ComponentProps<typeof Pressable> & {
  theme: "navigation"
  title: string,
  icon: ComponentProps<typeof MaterialIcons>
}

type Props = RectangleButtonProps | ControlButtonProps | NavigationButtonProps | ComponentProps<typeof Pressable>;

const CustomButton = forwardRef(({ style, disabled, ...props }: Props, _) => {
  const { styles } = useStyles(styleSheet)
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
          <Text numberOfLines={1} style={styles.text}>{props.title}</Text>
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
    case "navigation": {
      return (
        <Pressable
          {...props}
          disabled={disabled}
          style={[styles.navigation, ...defaultButtonStyles]}
        >
          <MaterialIcons
            {...props.icon}
            style={[
              styles.navigationThemeIcon,
              disabled && styles.disabledIcon,
              props.icon.style,
              props.icon.color ? { color: props.icon.color } : undefined,
              props.icon.size ? { fontSize: props.icon.size } : undefined,
            ]}
          />
          <Text style={styles.navigationText}>{props.title}</Text>
          <MaterialIcons name="chevron-right" style={styles.navigationArrowIcon} />
        </Pressable>
      )
    }
  }
})

export default CustomButton;