import { StyleSheet } from "react-native";

import { THEME } from "@/constants/theme";

export const styles = StyleSheet.create({
  form: {
    flex: 1,
    gap: THEME.SPACINGS.GAP,
    padding: THEME.SPACINGS.PADDING,
  },
  title: {
    fontSize: 25,
    alignSelf: "center",
  },
  labelInputContainer: {
    gap: 5,
  },
  label: {
    fontWeight: "500",
  },
  input: {
    height: 60,
    fontSize: 15,
    padding: THEME.SPACINGS.PADDING / 2,
    borderWidth: 2,
    borderColor: THEME.COLORS.SECONDARY,
    borderRadius: 5,
  },
  blocks: {
    flex: 1,
    borderColor: THEME.COLORS.SECONDARY,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  blocksTitle: {
    fontSize: 20,
    alignSelf: "center",
  },
  addBlockButton: {
    marginTop: "auto",
    alignSelf: "flex-end",
  },
  saveSessionButton: {
    backgroundColor: THEME.COLORS.TERTIARY,
    marginTop: "auto",
    alignSelf: "stretch",
  },
})