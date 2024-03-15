import { StyleSheet } from "react-native";

import { THEME } from "@/constants/theme";

export const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: THEME.COLORS.SECONDARY,
    justifyContent: "center",
  },
  text: {
    color: THEME.COLORS.TEXT_LIGHT,
  },
  big: {
    fontSize: 80,
  },
  medium: {
    fontSize: 40,
  },
})