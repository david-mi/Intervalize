import { StyleSheet } from "react-native";

import { THEME } from "@/constants/theme";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginTop: "auto",
    top: 25,
    marginBottom: "auto",
    borderWidth: 5,
    borderColor: THEME.COLORS.SECONDARY,
    backgroundColor: THEME.COLORS.PRIMARY,
  },
})