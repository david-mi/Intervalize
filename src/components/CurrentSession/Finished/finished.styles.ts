import { StyleSheet } from "react-native";

import { THEME } from "@/constants/theme";

export const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    backgroundColor: THEME.COLORS.TERTIARY,
    textAlign: "center",
    lineHeight: 50,
    paddingVertical: 25,
    color: THEME.COLORS.TEXT_LIGHT,
  },
  buttonsContainer: {
    flex: 1,
    gap: THEME.SPACINGS.GAP,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignSelf: "stretch",
    gap: THEME.SPACINGS.GAP,
  },
})