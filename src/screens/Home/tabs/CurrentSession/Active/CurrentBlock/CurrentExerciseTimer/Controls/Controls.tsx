import { View } from "react-native";

import Pause from "./Pause/Pause";
import Resume from "./Resume/Resume";
import Stop from "./Stop/Stop";
import { styles } from "./controls.styles";

interface Props {
  displayPauseButton?: boolean
  displayResumeButton?: boolean
}

function Controls({ displayPauseButton, displayResumeButton }: Props) {
  return (
    <View style={styles.container}>
      <Stop />
      {displayPauseButton && <Pause />}
      {displayResumeButton && <Resume />}
    </View>
  );
}

export default Controls;