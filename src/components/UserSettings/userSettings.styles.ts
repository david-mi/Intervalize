import { createStyleSheet } from "react-native-unistyles";

export const styles = createStyleSheet((theme) => ({
  container: {
    flexGrow: 1,
    paddingHorizontal: theme.SPACINGS.PADDING,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 25,
    gap: theme.SPACINGS.GAP,
  },
  text: {
    fontSize: 20,
    lineHeight: 23,
    color: theme.COLORS.TEXT,
    marginRight: "auto",
  },
  themeIcon: {
    fontSize: 18,
    color: theme.COLORS.TEXT,
  },
  arrowIcon: {
    fontSize: 22,
    color: theme.COLORS.TEXT,
    marginLeft: "auto",
  },
}))