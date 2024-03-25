import { createStyleSheet } from "react-native-unistyles";

export const editBlockStyles = createStyleSheet((theme) => ({
  editBlock: {
    flex: 1,
    gap: theme.SPACINGS.GAP,
    padding: theme.SPACINGS.PADDING,
    backgroundColor: theme.COLORS.PRIMARY,
    zIndex: 40,
  },
  title: {
    fontSize: 25,
    alignSelf: "center",
    color: theme.COLORS.TEXT,
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
  scrollable: {
    flexGrow: 1,
    backgroundColor: theme.COLORS.PRIMARY,
    justifyContent: "space-between",
    gap: theme.SPACINGS.GAP / 2,
  },
  saveBlockButton: {
    backgroundColor: theme.COLORS.TERTIARY,
    marginTop: "auto",
    alignSelf: "stretch",
  },
}))