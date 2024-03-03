import { StyleSheet } from "react-native";

import { globalStyle } from "@/styles/styles.variables.global";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: globalStyle.padding,
    flex: 1,
    backgroundColor: "red",
  },
  colorPickerContainer: {
    flex: 1,
  },
  colorPicker: {
    marginTop: "auto",
    flex: 1,
    gap: globalStyle.gap,
    paddingHorizontal: globalStyle.padding,
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