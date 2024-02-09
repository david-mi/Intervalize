import { StyleSheet } from "react-native";
import { globalStyle } from "@/styles/styles.variables.global";


export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "white",
    paddingHorizontal: globalStyle.padding
  },
  button: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 25,
  },
  text: {
    fontSize: 20,
    color: "#5c5855",
  },
  icon: {
    fontSize: 24,
    color: "#5c5855"
  }
})