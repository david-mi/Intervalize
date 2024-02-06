import { View, Text } from "react-native";
import { Time } from "../../../types";
import TextWithCustomFont from "../../TextWithCustomFont/TextWithCustomFont";
import { styles } from "./timer.styles";
import { ComponentProps } from "react";

type Props = Time<string> & {
  size: "medium" | "big"
}

function Timer({ minutes, seconds, size }: Props) {
  const timerContainerStyles = {
    ...styles.container,
    flex: size === "big" ? 0 : 1
  }

  const textStyles = {
    ...styles.text,
    ...styles[size]
  }

  return (
    <View style={timerContainerStyles}>
      <TextWithCustomFont style={textStyles} fontFamily="clockicons">
        {minutes}
      </TextWithCustomFont>
      <Text style={textStyles}>:</Text>
      <TextWithCustomFont style={textStyles} fontFamily="clockicons">
        {seconds}
      </TextWithCustomFont>
    </View>
  );
}

export default Timer;