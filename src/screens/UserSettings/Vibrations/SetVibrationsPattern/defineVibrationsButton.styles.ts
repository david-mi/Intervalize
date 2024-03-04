import { StyleSheet } from "react-native";

import { globalStyle } from "@/styles/styles.variables.global";

export const styles = StyleSheet.create({
  container: {
    gap: globalStyle.gap * 2,
    alignItems: "center",
    paddingVertical: 25,
  },
  title: {
    fontSize: 20,
    lineHeight: 23,
    borderBottomWidth: 1,
  },
  define: {
    backgroundColor: "red",
    alignItems: "center",
    height: 250,
    width: 250,
    borderRadius: 50,
  },
  controlButtons: {
    flexDirection: "row",
    gap: globalStyle.gap,
    justifyContent: "center",
  },
})