import { createStyleSheet } from "react-native-unistyles";

export const styles = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  title: {
    marginBottom: "auto",
    textAlign: "center",
    fontSize: 35,
    backgroundColor: theme.COLORS.TERTIARY,
    lineHeight: 50,
    paddingVertical: 25,
    color: theme.COLORS.TEXT_LIGHT,
  },
  button: {
    marginBottom: "auto",
  },
}))