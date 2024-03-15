import { StyleSheet } from "react-native";

import { THEME } from "@/constants/theme";

export const styles = StyleSheet.create({

  closeModalButton: {
    position: "absolute",
    top: 0,
    right: THEME.SPACINGS.GAP / 4,
  },
  closeModalButtonIcon: {
    fontSize: 40,
  },
  createSessionButton: {
    backgroundColor: THEME.COLORS.TERTIARY,
  },
})