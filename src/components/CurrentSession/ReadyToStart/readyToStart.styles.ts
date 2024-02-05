import { StyleSheet } from "react-native";
import { globalStyle } from "../../../styles/styles.variables.global";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    padding: globalStyle.padding
  },
  title: {
    marginBottom: "auto",
    textAlign: "center",
    fontSize: 35,
    backgroundColor: "red",
    lineHeight: 50,
    paddingVertical: 25,
    color: "white",
  },
  button: {
    marginBottom: "auto",
  }
})