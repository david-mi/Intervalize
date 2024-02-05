import { StyleSheet } from "react-native";
import { globalStyle } from "../../../styles/styles.variables.global";

export const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    backgroundColor: "red",
    textAlign: "center",
    lineHeight: 50,
    paddingVertical: 25,
    color: "white",
  },
  buttonsContainer: {
    flex: 1,
    gap: globalStyle.gap,
    justifyContent: "center"
  },
  container: {
    flex: 1,
    alignSelf: "stretch",
    gap: globalStyle.gap
  }
})