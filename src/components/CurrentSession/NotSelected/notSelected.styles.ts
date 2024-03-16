import { StyleSheet } from "react-native";

import { THEME } from "@/constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
  },
  infos: {
    flexBasis: "50%",
  },
  title: {
    fontSize: 35,
    backgroundColor: THEME.COLORS.TERTIARY,
    textAlign: "center",
    lineHeight: 50,
    paddingVertical: 25,
    color: THEME.COLORS.TEXT_LIGHT,
  },
  instructions: {
    marginTop: "auto",
    fontSize: 20,
    textAlign: "center",
    color: THEME.COLORS.TEXT,
  },
  button: {
    alignSelf: "stretch",
    marginBottom: "auto",
    marginTop: "auto",
  },
})