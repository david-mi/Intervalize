import { createStyleSheet } from "react-native-unistyles";

export const styles = createStyleSheet((theme) => ({
  otherExerciseName: {
    textAlign: "center",
    opacity: 0.4,
    alignItems: "center",
    fontSize: 25,
    color: theme.COLORS.TEXT,
  },
}))