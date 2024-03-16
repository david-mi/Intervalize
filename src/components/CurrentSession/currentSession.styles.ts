import { StyleSheet } from "react-native";

import { THEME } from "@/constants/theme";

export const styles = StyleSheet.create(({
  container: {
    flex: 1,
    padding: THEME.SPACINGS.PADDING,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.COLORS.PRIMARY,
  },
}))