import { View, Text } from "react-native";

import { styles } from "./timer.styles";

import TextWithCustomFont from "@/components/TextWithCustomFont/TextWithCustomFont";
import type { Time } from "@/types";

type Props = Time<string> & {
  size: "medium" | "big"
}

function Timer({ minutes, seconds, size }: Props) {
  const timerContainerStyles = {
    ...styles.container,
    flex: size === "big" ? 0 : 1,
  }

  const textStyles = {
    ...styles.text,
    ...styles[size],
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