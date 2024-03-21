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
  blocks: {
    position: "relative",
    flex: 1,
    borderColor: theme.COLORS.LABEL,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
    gap: theme.SPACINGS.GAP / 2,
  },
  heading: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.SPACINGS.GAP,
    marginTop: theme.SPACINGS.GAP / 2,
  },
  blocksTitle: {
    fontSize: 20,
    alignSelf: "center",
    color: theme.COLORS.TEXT,
  },
  blocksButtons: {
    gap: theme.SPACINGS.GAP / 2,
    backgroundColor: theme.COLORS.PRIMARY_BACKGROUND,
    padding: theme.SPACINGS.PADDING,
    flex: 1,
  },
  addBlockButton: {
    height: 30,
    width: 30,
    backgroundColor: theme.COLORS.TERTIARY,
  },
  addBlockButtonIcon: {
    color: theme.COLORS.TEXT_LIGHT,
    borderRadius: 50,
    padding: 0,
    fontSize: 30,
  },
  saveSessionButton: {
    backgroundColor: theme.COLORS.TERTIARY,
    marginTop: "auto",
    alignSelf: "stretch",
  },
}))