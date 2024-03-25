import { createStyleSheet } from "react-native-unistyles"

export const styles = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: theme.SPACINGS.PADDING,
    backgroundColor: theme.COLORS.PRIMARY,
  },
  listWrapper: {
    width: "100%",
  },
  list: {
    flex: 1,
    gap: theme.SPACINGS.GAP,
    alignItems: "stretch",
  },
  createSessionButton: {
    backgroundColor: theme.COLORS.TERTIARY,
  },
})) 