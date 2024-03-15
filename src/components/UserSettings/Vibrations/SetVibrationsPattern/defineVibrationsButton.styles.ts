import { StyleSheet } from "react-native";

import { THEME } from "@/constants/theme";

export const styles = StyleSheet.create({
  container: {
    gap: THEME.SPACINGS.GAP * 2,
    alignItems: "center",
    paddingVertical: 25,
  },
  title: {
    fontSize: 20,
    lineHeight: 23,
    borderBottomWidth: 1,
  },
  define: {
    backgroundColor: THEME.COLORS.TERTIARY,
    alignItems: "center",
    height: 250,
    width: 250,
    borderRadius: 50,
  },
  controlButtons: {
    flexDirection: "row",
    gap: THEME.SPACINGS.GAP,
    justifyContent: "center",
  },
})