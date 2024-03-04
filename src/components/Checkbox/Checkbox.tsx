import type { ComponentProps } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { styles } from "./checkbox.styles"

type Props = ComponentProps<typeof BouncyCheckbox>

function Checkbox({ onPress, text, disabled, ...props }: Props) {
  return (
    <BouncyCheckbox
      fillColor={disabled ? "#b1aeac" : "black"}
      innerIconStyle={styles.innerIcon}
      size={25}
      style={styles.container}
      textStyle={{
        ...styles.text,
        color: disabled ? "#b1aeac" : "black",
      }}
      unfillColor="#FFFFFF"
      {...props}
      onPress={onPress}
      text={text}
    />
  );
}

export default Checkbox;