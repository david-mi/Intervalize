import { createStyleSheet } from "react-native-unistyles";

export const styles = createStyleSheet((theme) => ({
  container: {
    zIndex: 10,
    position: "absolute",
    top: -40,
    backgroundColor: theme.COLORS.ITERATION_COUNT,
    alignSelf: "center",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    position: "absolute",
    fontSize: 25,
    color: theme.COLORS.ITERATION_COUNT_TEXT,
    lineHeight: 36,
  },
  icon: {
    margin: -30,
    transform: [{ rotateX: "180deg" }],
    color: theme.COLORS.TEXT,
  },
}))