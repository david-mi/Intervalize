import { createStyleSheet } from "react-native-unistyles";

export const styles = createStyleSheet((theme) => ({
  checkboxes: {
    flexDirection: "column",
    gap: theme.SPACINGS.GAP,
  },
  text: {
    fontSize: 20,
    textDecorationLine: "none",
    lineHeight: 23,
    color: theme.COLORS.TEXT,
  },
  innerIcon: {
    borderWidth: 2,
  },
}))