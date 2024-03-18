import { createStyleSheet } from "react-native-unistyles";

export const styles = createStyleSheet((theme) => ({
  container: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: theme.COLORS.SECONDARY,
    justifyContent: "center",
  },
  text: {
    color: theme.COLORS.TEXT_LIGHT,
  },
  big: {
    fontSize: 80,
  },
  medium: {
    fontSize: 40,
  },
}))