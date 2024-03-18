import type { ComponentProps } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useStyles } from "react-native-unistyles";

import { styles as styleSheet } from "./checkbox.styles"

type Props = ComponentProps<typeof BouncyCheckbox>

function Checkbox({ onPress, text, disabled, ...props }: Props) {
  const { styles, theme } = useStyles(styleSheet)

  return (
    <BouncyCheckbox
      fillColor={disabled ? "#b1aeac" : theme.COLORS.CHECKBOX}
      iconImageStyle={{ tintColor: theme.COLORS.CHECKBOX_ICON }}
      innerIconStyle={styles.innerIcon}
      size={25}
      style={styles.container}
      textStyle={{
        ...styles.text,
        color: disabled ? "#b1aeac" : theme.COLORS.TEXT,
      }}
      unfillColor="#FFFFFF"
      {...props}
      onPress={onPress}
      text={text}
    />
  );
}

export default Checkbox;