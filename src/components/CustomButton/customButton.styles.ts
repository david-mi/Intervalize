import { StyleSheet } from "react-native";

import { globalStyle } from "@/styles/styles.variables.global";

export const styles = StyleSheet.create({
  rectangle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 25,
    borderRadius: 4,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.20,
    shadowRadius: 5.62,
    elevation: 7,
    backgroundColor: "black",
  },
  rectangleIcon: {
    fontSize: 24,
    color: "white",
  },
  text: {
    fontSize: 20,
    color: "white",
  },
  control: {
    backgroundColor: "black",
    borderRadius: 50,
  },
  controlIcon: {
    padding: 15,
    fontSize: 50,
    color: "white",
  },
  disabledButton: {
    backgroundColor: globalStyle.disabledButtonColor,
  },
  disabledIcon: {
    color: globalStyle.disabledIconColor,
  },
})