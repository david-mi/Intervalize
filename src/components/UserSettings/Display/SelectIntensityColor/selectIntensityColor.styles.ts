import { StyleSheet } from "react-native";

import { THEME } from "@/constants/theme";

export const styles = StyleSheet.create({
  colorPickerContainer: {
    flex: 1,
  },
  colorPicker: {
    marginTop: "auto",
    flex: 1,
    gap: THEME.SPACINGS.GAP,
    paddingHorizontal: THEME.SPACINGS.PADDING,
    backgroundColor: "transparent",
  },
  preview: {
    marginTop: "auto",
  },
  buttonsContainer: {
    marginTop: "auto",
    marginBottom: "auto",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

})