import { createStyleSheet } from "react-native-unistyles";

export const styles = createStyleSheet((theme) => ({
  sessionForm: {
    flex: 1,
    gap: theme.SPACINGS.GAP,
    padding: theme.SPACINGS.PADDING,
    backgroundColor: theme.COLORS.PRIMARY,
  },
  title: {
    fontSize: 25,
    alignSelf: "center",
    color: theme.COLORS.TEXT,
  },
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
  saveSessionButton: {
    backgroundColor: theme.COLORS.TERTIARY,
    marginTop: "auto",
    alignSelf: "stretch",
  },
}))