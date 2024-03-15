import { StyleSheet } from "react-native"

import { THEME } from "@/constants/theme"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: THEME.SPACINGS.PADDING,
  },
  listWrapper: {
    width: "100%",
  },
  list: {
    flex: 1,
    gap: THEME.SPACINGS.GAP,
    alignItems: "stretch",
  },
}) 