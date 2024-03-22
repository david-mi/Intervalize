import { StyleSheet } from "react-native";
import { createStyleSheet } from "react-native-unistyles";

export const sectionWrapperStyles = createStyleSheet((theme) => ({
  sectionWrapper: {
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
  title: {
    fontSize: 20,
    alignSelf: "center",
    color: theme.COLORS.TEXT,
  },
  appendElementButton: {
    height: 30,
    width: 30,
    backgroundColor: theme.COLORS.TERTIARY,
  },
  elementButtonsWrapper: {
    flex: 1,
    padding: theme.SPACINGS.PADDING,
    backgroundColor: theme.COLORS.PRIMARY_BACKGROUND,
  },
  elementButtons: {
    gap: theme.SPACINGS.GAP / 2,
  },
  appendElementButtonIcon: {
    color: theme.COLORS.TEXT_LIGHT,
    borderRadius: 50,
    padding: 0,
    fontSize: 30,
  },
}))