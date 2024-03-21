import { createStyleSheet } from "react-native-unistyles";

export const customLabelInputErrorWrapperStyles = createStyleSheet((theme) => ({
  customLabelInputErrorWrapper: {
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
    color: theme.COLORS.TEXT_DARK,
    borderRadius: 5,
  },
  error: {
    color: theme.COLORS.INPUT_ERROR,
  },
}))