import { StyleSheet } from "react-native";

import { THEME } from "@/constants/theme";

export const styles = StyleSheet.create({
  define: {
    backgroundColor: THEME.COLORS.TERTIARY,
    alignItems: "center",
    height: 250,
    width: 250,
    borderRadius: 50,
  },
  pressIconWrapper: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  instructions: {
    color: THEME.COLORS.TEXT_LIGHT,
    fontStyle: "italic",
    fontWeight: "500",
    marginTop: 20,
  },
})