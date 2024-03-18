import { createStyleSheet } from "react-native-unistyles";

export const styles = createStyleSheet((theme) => ({
  closeModalButton: {
    position: "absolute",
    zIndex: 10,
    top: 0,
    right: theme.SPACINGS.GAP / 4,
  },
  closeModalButtonIcon: {
    fontSize: 40,
    color: theme.COLORS.TEXT,
  },
  createSessionButton: {
    backgroundColor: theme.COLORS.TERTIARY,
  },
}))