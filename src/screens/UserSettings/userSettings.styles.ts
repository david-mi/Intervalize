import { StyleSheet } from "react-native";
import { globalStyle } from "../../styles/styles.variables.global";

export const styles = StyleSheet.create({
  container: {
    gap: globalStyle.gap,
    justifyContent: "center",
    paddingHorizontal: globalStyle.padding,

  },
  header: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    backgroundColor: "black",
    paddingVertical: 10,
    marginHorizontal: -globalStyle.padding
  }
})