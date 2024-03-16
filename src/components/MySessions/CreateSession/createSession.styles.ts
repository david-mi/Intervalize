import { StyleSheet } from "react-native";

import { THEME } from "@/constants/theme";

export const styles = StyleSheet.create({
  closeModalButton: {
    position: "absolute",
    zIndex: 10,
    top: 0,
    right: THEME.SPACINGS.GAP / 4,
  },
  closeModalButtonIcon: {
    fontSize: 40,
    color: THEME.COLORS.TEXT,
  },
  createSessionButton: {
    backgroundColor: THEME.COLORS.TERTIARY,
  },
})