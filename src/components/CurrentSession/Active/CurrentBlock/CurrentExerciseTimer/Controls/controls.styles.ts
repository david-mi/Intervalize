import { createStyleSheet } from "react-native-unistyles";

export const styles = createStyleSheet((theme) => ({
  container: {
    flexDirection: "row",
    gap: theme.SPACINGS.GAP,
    justifyContent: "space-evenly",
  },
  icon: {},
}))