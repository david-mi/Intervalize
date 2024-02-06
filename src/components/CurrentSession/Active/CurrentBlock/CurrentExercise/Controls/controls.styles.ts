import { StyleSheet } from "react-native";
import { globalStyle } from "../../../../../../styles/styles.variables.global";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: globalStyle.gap,
    justifyContent: "space-evenly"
  },
  button: {
    // backgroundColor: "black",
    borderRadius: 50,
    borderWidth: 5

  },
  icon: {}
})