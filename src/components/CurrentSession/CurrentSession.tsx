import * as React from 'react';
import { Text, View } from 'react-native';
import { GlobalContext } from "../../context/GlobalContext";
import SessionTimer from "./Active/SessionTimer/SessionTimer";
import CurrentBlock from "./Active/CurrentBlock/CurrentBlock";
import Controls from "./Active/CurrentBlock/CurrentExercise/Controls/Controls";
import { SessionStatus } from "../../types";
import NotSelected from "./NotSelected/NotSelected";
import ReadyToStart from "./ReadyToStart/ReadyToStart";
import Active from "./Active/Active";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { TabNavParamList } from "../../types";
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

  // const sessionComponents: { [key in SessionStatus]: React.JSX.Element } = {
  //   NOT_SELECTED: <NotSelected navigation={navigation} />,
  //   READY_TO_START: <ReadyToStart />,
  //   ACTIVE: <Active />,
  //   PAUSED: <Active />,
  //   FINISHED: <Finished navigation={navigation} />
  // }

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