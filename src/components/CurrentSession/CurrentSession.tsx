import * as React from 'react';
import { Text, View } from 'react-native';
import { GlobalContext } from "../../context/GlobalContext";
import SessionTimer from "./Active/SessionTimer/SessionTimer";
import CurrentBlock from "./Active/CurrentBlock/CurrentBlock";
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

  const sessionComponents: { [key in SessionStatus]: React.JSX.Element } = {
    NOT_SELECTED: <NotSelected navigation={navigation} />,
    READY_TO_START: <ReadyToStart />,
    ACTIVE: <Active />,
    PAUSED: <Text>Session en pause</Text>,
    FINISHED: <Finished navigation={navigation} />
  }

  return (
    <View style={styles.container}>
      {sessionComponents[sessionStatus]}
    </View>
  );
}

export default CurrentSession;