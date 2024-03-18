import { createStyleSheet } from "react-native-unistyles";

export const styles = createStyleSheet((theme) => ({
  currentExercise: {
    fontSize: 25,
    textAlign: "center",
    color: theme.COLORS.TEXT,
  },
}))