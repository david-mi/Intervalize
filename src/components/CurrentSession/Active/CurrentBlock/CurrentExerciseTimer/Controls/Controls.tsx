import { View } from "react-native";
import { styles } from "./controls.styles";
import Stop from "./Stop/Stop";
import Pause from "./Pause/Pause";
import Resume from "./Resume/Resume";

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