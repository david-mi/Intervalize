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
    color: globalStyle.navigationColor,
    borderBottomWidth: 1,
  },
  pressIconWrapper: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  pressZone: {
    backgroundColor: "red",
    alignItems: "center",
    height: 250,
    width: 250,
    borderRadius: 50,
  },
  text: {
    color: "white",
    fontStyle: "italic",
    fontWeight: "500",
    marginTop: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: globalStyle.gap,
    justifyContent: "center",
  },
})