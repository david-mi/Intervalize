import { createStyleSheet } from "react-native-unistyles";

export const styles = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    padding: theme.SPACINGS.PADDING,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.COLORS.PRIMARY,
  },
}))