import * as React from 'react';
import { View } from 'react-native';
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { GlobalContext } from "../../context/GlobalContext";
import { TabNavParamList } from "../../types";
import Controls from "./Active/CurrentBlock/CurrentExerciseTimer/Controls/Controls";
import NotSelected from "./NotSelected/NotSelected";
import ReadyToStart from "./ReadyToStart/ReadyToStart";
import Active from "./Active/Active";
import Finished from "./Finished/Finished";
import { styles } from "./currentSession.styles";

type Props = BottomTabScreenProps<TabNavParamList, "Session en cours">

function CurrentSession({ navigation }: Props) {
  const { sessionStatus, currentSession } = React.useContext(GlobalContext)

  React.useEffect(() => {
    if (currentSession) {
      navigation.setOptions({ title: currentSession.name })
    }
  }, [currentSession])

  function getCurrentComponent() {
    switch (sessionStatus) {
      case "NOT_SELECTED": return <NotSelected navigation={navigation} />
      case "READY_TO_START": return <ReadyToStart />
      case "ACTIVE": return (
        <Active>
          <Controls displayPauseButton />
        </Active>
      )
      case "PAUSED": return (
        <Active>
          <Controls displayResumeButton />
        </Active>
      )
      case "FINISHED": return <Finished navigation={navigation} />
    }
  }

  return (
    <View style={styles.container}>
      {getCurrentComponent()}
    </View>
  );
}

export default CurrentSession;