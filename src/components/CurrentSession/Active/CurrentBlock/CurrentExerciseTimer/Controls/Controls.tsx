import { View } from "react-native";
import { useStyles } from "react-native-unistyles";

import Pause from "./Pause/Pause";
import Resume from "./Resume/Resume";
import Stop from "./Stop/Stop";
import { styles as styleSheet } from "./controls.styles";

interface Props {
  displayPauseButton?: boolean
  displayResumeButton?: boolean
}

function Controls({ displayPauseButton, displayResumeButton }: Props) {
  const { styles } = useStyles(styleSheet)

  return (
    <View style={styles.container}>
      <Stop />
      {displayPauseButton && <Pause />}
      {displayResumeButton && <Resume />}
    </View>
  );
}

export default Controls;