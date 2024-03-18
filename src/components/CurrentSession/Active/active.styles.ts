import { createStyleSheet } from "react-native-unistyles";

export const styles = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    alignSelf: "stretch",
    margin: -theme.SPACINGS.PADDING,
    padding: theme.SPACINGS.PADDING,
  },
}))