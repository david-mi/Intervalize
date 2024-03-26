import { MaterialIcons } from "@expo/vector-icons";
import CustomButton from "@shared/CustomButton/CustomButton";
import useBoundedStore from "@store/store";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { Alert, View } from "react-native";
import { Drawer } from "react-native-ui-lib";
import { useStyles } from "react-native-unistyles";

import { sessionButtonStyles } from "./styles"

import type { SessionType } from "@/types";

interface SessionButtonProps {
  session: SessionType
  setSessionToUpdate: React.Dispatch<React.SetStateAction<SessionType | null>>
  setSessionFormDisplayed: (displayed: boolean) => void
}

function SessionButton({ session, setSessionToUpdate, setSessionFormDisplayed }: SessionButtonProps) {
  const { t } = useTranslation()
  const { styles, theme } = useStyles(sessionButtonStyles)

  const {
    currentSession,
    setCurrentSession,
    sessionStatus,
    setSessionStatus,
  } = useBoundedStore()

  function startNewSession(session: SessionType) {
    setCurrentSession(session)
    setSessionStatus("READY_TO_START")
    router.navigate("/")
  }

  function handlePress() {
    const haveAnActiveSession = (
      currentSession !== null &&
      sessionStatus !== "READY_TO_START"
      && sessionStatus !== "FINISHED"
    )

    if (haveAnActiveSession) {
      Alert.alert(
        t("sessionIsRunning"),
        t("startANewSession"),
        [
          { text: t("abort"), style: "cancel" },
          { text: t("start"), onPress: () => startNewSession(session) },
        ]
      );
    } else {
      startNewSession(session)
    }
  }

  return (
    <View style={styles.container}>
      <Drawer
        leftItem={{
          onPress: () => console.log("delete pressed"),
          background: theme.COLORS.DELETE_SESSION_BUTTON,
          customElement: (
            <MaterialIcons
              name="delete-forever"
              style={styles.actionIcon}
            />
          ),
        }
        }
        rightItems={[
          {
            onPress: () => {
              setSessionToUpdate(session)
              setSessionFormDisplayed(true)
            },
            background: theme.COLORS.EDIT_SESSION_BUTTON,
            customElement: (
              <MaterialIcons
                name="edit"
                style={styles.actionIcon}
              />
            ),
          }]
        }
        style={styles.actionButton}
      >
        <CustomButton
          icon={{ name: "touch-app" }}
          onPress={handlePress}
          theme="rectangle"
          title={session.name}
        />
      </Drawer>
    </View>
  );
}

export default SessionButton;