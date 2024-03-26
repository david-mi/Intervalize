import { MaterialIcons } from "@expo/vector-icons";
import CustomButton from "@shared/CustomButton/CustomButton";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { Drawer } from "react-native-ui-lib";
import { useStyles } from "react-native-unistyles";

import { sessionButtonStyles } from "./styles"

import type { SessionType } from "@/types";

interface SessionButtonProps {
  onPress: (sessionId: string) => void
  session: SessionType
}

function SessionButton({ onPress, session }: SessionButtonProps) {
  const { t } = useTranslation()
  const { styles, theme } = useStyles(sessionButtonStyles)

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
            onPress: () => console.log("read pressed"),
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
          onPress={() => onPress(session.id)}
          theme="rectangle"
          title={session.name}
        />
      </Drawer>
    </View>
  );
}

export default SessionButton;