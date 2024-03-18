import { createStyleSheet } from "react-native-unistyles";

export const styles = createStyleSheet((theme) => ({
  container: {
    position: "relative",
    marginTop: "auto",
    top: 25,
    marginBottom: "auto",
    borderWidth: 5,
    borderColor: theme.COLORS.SECONDARY,
    backgroundColor: theme.COLORS.CURRENT_ITERATION_BLOCK,
  },
}))