import * as React from "react";
import { View } from "react-native";

import Active from "./Active/Active";
import Controls from "./Active/CurrentBlock/CurrentExerciseTimer/Controls/Controls";
import Finished from "./Finished/Finished";
import NotSelected from "./NotSelected/NotSelected";
import ReadyToStart from "./ReadyToStart/ReadyToStart";
import { styles } from "./currentSession.styles";

import useBoundedStore from "@store/store";

function CurrentSession() {
  const sessionStatus = useBoundedStore((state) => state.sessionStatus)

  function getCurrentComponent() {
    switch (sessionStatus) {
      case "NOT_SELECTED": return <NotSelected />
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
      case "FINISHED": return <Finished />
    }
  }

  return (
    <View style={styles.container}>
      {getCurrentComponent()}
    </View>
  );
}

export default CurrentSession;