import { StyleSheet } from "react-native";

import { THEME } from "@/constants/theme";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: THEME.SPACINGS.PADDING,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 25,
    gap: THEME.SPACINGS.GAP,
  },
  text: {
    fontSize: 20,
    lineHeight: 23,
    color: THEME.COLORS.TEXT,
    marginRight: "auto",
  },
  themeIcon: {
    fontSize: 18,
    color: THEME.COLORS.TEXT,
  },
  arrowIcon: {
    fontSize: 22,
    color: THEME.COLORS.TEXT,
    marginLeft: "auto",
  },
})