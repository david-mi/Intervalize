import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import * as React from "react";
import { View } from "react-native";

import Active from "./Active/Active";
import Controls from "./Active/CurrentBlock/CurrentExerciseTimer/Controls/Controls";
import Finished from "./Finished/Finished";
import NotSelected from "./NotSelected/NotSelected";
import ReadyToStart from "./ReadyToStart/ReadyToStart";
import { styles } from "./currentSession.styles";

import useBoundedStore from "@/store/store";
import type { TabNavParamList } from "@/types";

type Props = BottomTabScreenProps<TabNavParamList, "Séance en cours">

function CurrentSession({ navigation }: Props) {
  const sessionStatus = useBoundedStore((state) => state.sessionStatus)

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