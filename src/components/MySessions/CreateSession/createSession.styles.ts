import { StyleSheet } from "react-native";

import { globalStyle } from "@/styles/styles.variables.global";

export const styles = StyleSheet.create({

  closeModalButton: {
    position: "absolute",
    top: 0,
    right: globalStyle.gap / 4,
  },
  closeModalButtonIcon: {
    fontSize: 40,
  },
  createSessionButton: {
    backgroundColor: "red",
  },
})