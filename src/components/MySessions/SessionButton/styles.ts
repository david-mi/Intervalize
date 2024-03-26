import { createStyleSheet } from "react-native-unistyles";

export const sessionButtonStyles = createStyleSheet((theme) => ({
  container: {
    backgroundColor: "green",
    borderRadius: 4,
    overflow: "hidden",
  },
  actionButton: {
    borderRadius: 4,
    backgroundColor: "red",
  },
  actionIcon: {
    color: theme.COLORS.TEXT_LIGHT,
    fontSize: 24,
    paddingHorizontal: theme.SPACINGS.PADDING / 4,
  },
}))