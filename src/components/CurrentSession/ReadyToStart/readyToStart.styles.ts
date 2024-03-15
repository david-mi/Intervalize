import { StyleSheet } from "react-native";

import { THEME } from "@/constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  title: {
    marginBottom: "auto",
    textAlign: "center",
    fontSize: 35,
    backgroundColor: THEME.COLORS.TERTIARY,
    lineHeight: 50,
    paddingVertical: 25,
    color: THEME.COLORS.TEXT_LIGHT,
  },
  button: {
    marginBottom: "auto",
  },
})