import { createStyleSheet } from "react-native-unistyles";

export const styles = createStyleSheet((theme) => ({
  container: {
    paddingHorizontal: theme.SPACINGS.PADDING,
    flex: 1,
  },
  button: {
    paddingVertical: 25,
  },
}))