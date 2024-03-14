import { StyleSheet } from "react-native";

import { globalStyle } from "@/styles/styles.variables.global";

export const styles = StyleSheet.create(({
  container: {
    flex: 1,
    padding: globalStyle.padding,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
}))