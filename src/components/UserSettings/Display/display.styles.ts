import { StyleSheet } from "react-native";
import { createStyleSheet } from "react-native-unistyles";

export const styles = createStyleSheet((theme) => ({
  container: {
    padding: theme.SPACINGS.PADDING,
    gap: theme.SPACINGS.GAP,
    flex: 1,
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
    borderBottomColor: theme.COLORS.SECONDARY,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
}))