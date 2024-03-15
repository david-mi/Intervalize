import { StyleSheet } from "react-native";

import { THEME } from "@/constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    margin: -THEME.SPACINGS.PADDING,
    padding: THEME.SPACINGS.PADDING,
  },
})