import { createStyleSheet } from "react-native-unistyles";

export const styles = createStyleSheet((theme) => ({
  colorPickerContainer: {
    flex: 1,
  },
  colorPicker: {
    marginTop: "auto",
    flex: 1,
    gap: theme.SPACINGS.GAP,
    paddingHorizontal: theme.SPACINGS.PADDING,
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

}))