import { createStyleSheet } from "react-native-unistyles";

export const styles = createStyleSheet((theme) => ({
  container: {
    gap: theme.SPACINGS.GAP * 2,
    alignItems: "center",
    paddingVertical: 25,
  },
  title: {
    fontSize: 20,
    lineHeight: 23,
    borderBottomWidth: 1,
    color: theme.COLORS.TEXT,
    borderBottomColor: theme.COLORS.TEXT,
  },
  define: {
    backgroundColor: theme.COLORS.TERTIARY,
    alignItems: "center",
    height: 250,
    width: 250,
    borderRadius: 50,
  },
  controlButtons: {
    flexDirection: "row",
    gap: theme.SPACINGS.GAP,
    justifyContent: "center",
  },
}))