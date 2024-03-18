import { createStyleSheet } from "react-native-unistyles";

export const styles = createStyleSheet((theme) => ({
  container: {
    borderWidth: 5,
    borderColor: theme.COLORS.SECONDARY,
    flexDirection: "row",
  },
  title: {
    fontSize: 30,
    backgroundColor: theme.COLORS.PRIMARY,
    textAlign: "center",
  },
}))