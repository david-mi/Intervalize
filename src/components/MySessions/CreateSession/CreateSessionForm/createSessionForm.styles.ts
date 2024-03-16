import { StyleSheet } from "react-native";

import { THEME } from "@/constants/theme";

export const styles = StyleSheet.create({
  form: {
    flex: 1,
    gap: THEME.SPACINGS.GAP,
    padding: THEME.SPACINGS.PADDING,
    backgroundColor: THEME.COLORS.PRIMARY,
  },
  title: {
    fontSize: 25,
    alignSelf: "center",
    color: THEME.COLORS.TEXT,
  },
  labelInputContainer: {
    gap: 5,
  },
  label: {
    fontWeight: "500",
    color: THEME.COLORS.LABEL,
  },
  input: {
    height: 60,
    fontSize: 15,
    padding: THEME.SPACINGS.PADDING / 2,
    borderWidth: 1,
    borderColor: THEME.COLORS.LABEL,
    backgroundColor: THEME.COLORS.INPUT,
    color: THEME.COLORS.TEXT,
    borderRadius: 5,
  },
  blocks: {
    flex: 1,
    borderColor: THEME.COLORS.LABEL,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  blocksTitle: {
    fontSize: 20,
    alignSelf: "center",
    color: THEME.COLORS.TEXT,
  },
  addBlockButton: {
    marginTop: "auto",
    alignSelf: "flex-end",
  },
  addBlockButtonIcon: {
    color: THEME.COLORS.TEXT,
  },
  saveSessionButton: {
    backgroundColor: THEME.COLORS.TERTIARY,
    marginTop: "auto",
    alignSelf: "stretch",
  },
})