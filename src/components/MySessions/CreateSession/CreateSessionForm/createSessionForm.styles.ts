import { StyleSheet } from "react-native";
import { createStyleSheet } from "react-native-unistyles";

export const styles = createStyleSheet((theme) => ({
  form: {
    flex: 1,
    gap: theme.SPACINGS.GAP,
    padding: theme.SPACINGS.PADDING,
    backgroundColor: theme.COLORS.PRIMARY,
  },
  title: {
    fontSize: 25,
    alignSelf: "center",
    color: theme.COLORS.TEXT,
  },
  labelInputContainer: {
    gap: 5,
  },
  label: {
    fontWeight: "500",
    color: theme.COLORS.LABEL,
  },
  input: {
    height: 60,
    fontSize: 15,
    padding: theme.SPACINGS.PADDING / 2,
    borderWidth: 1,
    borderColor: theme.COLORS.LABEL,
    backgroundColor: theme.COLORS.INPUT,
    color: theme.COLORS.TEXT,
    borderRadius: 5,
  },
  blocks: {
    flex: 1,
    borderColor: theme.COLORS.LABEL,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  blocksTitle: {
    fontSize: 20,
    alignSelf: "center",
    color: theme.COLORS.TEXT,
  },
  addBlockButton: {
    marginTop: "auto",
    alignSelf: "flex-end",
  },
  addBlockButtonIcon: {
    color: theme.COLORS.TEXT,
  },
  saveSessionButton: {
    backgroundColor: theme.COLORS.TERTIARY,
    marginTop: "auto",
    alignSelf: "stretch",
  },
}))