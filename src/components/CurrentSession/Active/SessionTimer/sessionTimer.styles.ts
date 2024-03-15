import { StyleSheet } from "react-native";

import { THEME } from "@/constants/theme";

export const styles = StyleSheet.create({
  container: {
    borderWidth: 5,
    borderColor: THEME.COLORS.SECONDARY,
    flexDirection: "row",
  },
  title: {
    fontSize: 30,
    backgroundColor: THEME.COLORS.PRIMARY,
    textAlign: "center",
  },
})