import { StyleSheet } from "react-native";
import { createStyleSheet } from "react-native-unistyles";

export const styles = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    padding: theme.SPACINGS.PADDING,
  },
  scrollViewContainer: {
    gap: theme.SPACINGS.GAP,
  },
  item: {
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
  },
  title: {
    fontSize: 23,
    fontWeight: "600",
    color: theme.COLORS.TEXT,
  },
  intensityColors: {
    gap: theme.SPACINGS.GAP / 2,
  },
  separator: {
    borderBottomColor: theme.COLORS.TEXT,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
}))