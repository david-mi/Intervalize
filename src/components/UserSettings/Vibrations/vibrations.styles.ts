import { StyleSheet } from "react-native";

import { THEME } from "@/constants/theme";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.SPACINGS.PADDING,
    flex: 1,
    backgroundColor: THEME.COLORS.PRIMARY,
  },
  button: {
    paddingVertical: 25,
  },
})