import { createStyleSheet } from "react-native-unistyles";

export const editExerciseStyles = createStyleSheet((theme) => ({
  editExercise: {
    flex: 1,
    gap: theme.SPACINGS.GAP,
    padding: theme.SPACINGS.PADDING,
    backgroundColor: theme.COLORS.PRIMARY,
    zIndex: 80,
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
  },
  inputs: {
    gap: theme.SPACINGS.GAP / 2,
  },
  saveExerciseButton: {
    backgroundColor: theme.COLORS.TERTIARY,
    marginTop: theme.SPACINGS.GAP,
  },
}))