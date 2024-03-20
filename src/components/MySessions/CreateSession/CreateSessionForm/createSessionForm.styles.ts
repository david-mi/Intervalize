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
  error: {
    color: theme.COLORS.INPUT_ERROR,
  },
  blocks: {
    position: "relative",
    flex: 1,
    borderColor: theme.COLORS.LABEL,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
    gap: theme.SPACINGS.GAP / 2,
  },
  blocksButtons: {
    gap: theme.SPACINGS.GAP / 2,
  },
  blocksTitle: {
    fontSize: 20,
    alignSelf: "center",
    color: theme.COLORS.TEXT,
  },
  addBlockButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  addBlockButtonIcon: {
    color: theme.COLORS.TEXT_LIGHT,
    backgroundColor: theme.COLORS.TERTIARY,
    borderRadius: 50,
  },
  saveSessionButton: {
    backgroundColor: theme.COLORS.TERTIARY,
    marginTop: "auto",
    alignSelf: "stretch",
  },
  closeModalButton: {
    position: "absolute",
    zIndex: 10,
    top: 0,
    right: theme.SPACINGS.GAP / 4,
  },
  closeModalButtonIcon: {
    fontSize: 40,
    color: theme.COLORS.TEXT,
  },
  addBlock: {
    flex: 1,
    gap: theme.SPACINGS.GAP,
    padding: theme.SPACINGS.PADDING,
    backgroundColor: theme.COLORS.PRIMARY,
    zIndex: 40,
  },
}))