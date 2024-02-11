import { StyleSheet } from "react-native";

import { globalStyle } from "@/styles/styles.variables.global";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "white",
    paddingHorizontal: globalStyle.padding,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 25,
    gap: globalStyle.gap,
  },
  text: {
    fontSize: 20,
    lineHeight: 23,
    color: globalStyle.navigationColor,
    marginRight: "auto",
  },
  themeIcon: {
    fontSize: 18,
    color: globalStyle.navigationColor,
  },
  arrowIcon: {
    fontSize: 22,
    color: globalStyle.navigationColor,
    marginLeft: "auto",
  },
})