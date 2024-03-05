import { StyleSheet } from "react-native"

import { globalStyle } from "@/styles/styles.variables.global"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: globalStyle.padding,
  },
  listWrapper: {
    width: "100%",
  },
  list: {
    flex: 1,
    gap: globalStyle.gap,
    alignItems: "stretch",
  },
}) 