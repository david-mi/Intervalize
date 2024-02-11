import { StyleSheet } from "react-native"

import { globalStyle } from "@/styles/styles.variables.global"

export const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
  },
  list: {
    flex: 1,
    gap: globalStyle.gap,
    alignItems: "stretch",
    padding: globalStyle.padding,
  },
}) 