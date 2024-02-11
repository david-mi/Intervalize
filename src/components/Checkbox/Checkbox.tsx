import type { ComponentProps } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { styles } from "./checkbox.styles"

type Props = ComponentProps<typeof BouncyCheckbox>

function Checkbox({ onPress, text, disabled, ...props }: Props) {
  return (
    <BouncyCheckbox
      size={25}
      fillColor={disabled ? "#b1aeac" : "#5c5855"}
      unfillColor="#FFFFFF"
      style={styles.container}
      innerIconStyle={styles.innerIcon}
      textStyle={{
        ...styles.text,
        color: disabled ? "#b1aeac" : "#5c5855",
      }}
      {...props}
      text={text}
      onPress={onPress}
    />
  );
}

export default Checkbox;