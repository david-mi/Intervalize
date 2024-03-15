import { StyleSheet } from "react-native";

import { THEME } from "@/constants/theme";

export const styles = StyleSheet.create({
  container: {
    padding: THEME.SPACINGS.PADDING,
    gap: THEME.SPACINGS.GAP,
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
  },
  intensityColors: {
    gap: THEME.SPACINGS.GAP / 2,
  },
  separator: {
    borderBottomColor: THEME.COLORS.SECONDARY,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
})