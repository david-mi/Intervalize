import { createStyleSheet } from "react-native-unistyles";

export const styles = createStyleSheet((theme) => ({
  title: {
    fontSize: 35,
    backgroundColor: theme.COLORS.TERTIARY,
    textAlign: "center",
    lineHeight: 50,
    paddingVertical: 25,
    color: theme.COLORS.TEXT_LIGHT,
  },
  buttonsContainer: {
    flex: 1,
    gap: theme.SPACINGS.GAP,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignSelf: "stretch",
    gap: theme.SPACINGS.GAP,
  },
}))