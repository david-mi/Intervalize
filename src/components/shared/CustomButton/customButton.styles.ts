import { createStyleSheet } from "react-native-unistyles";

export const styles = createStyleSheet((theme) => ({
  rectangle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 25,
    borderRadius: 4,
    shadowColor: theme.COLORS.SECONDARY,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.20,
    shadowRadius: 5.62,
    elevation: 7,
    backgroundColor: theme.COLORS.SECONDARY,
  },
  rectangleIcon: {
    fontSize: 24,
    color: theme.COLORS.TEXT_LIGHT,
  },
  text: {
    fontSize: 20,
    color: theme.COLORS.TEXT_LIGHT,
  },
  control: {
    backgroundColor: theme.COLORS.SECONDARY,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  controlIcon: {
    padding: 15,
    fontSize: 50,
    color: theme.COLORS.TEXT_LIGHT,
  },
  navigation: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 25,
    gap: theme.SPACINGS.GAP,
  },
  navigationThemeIcon: {
    fontSize: 18,
    color: theme.COLORS.TEXT,
  },
  navigationArrowIcon: {
    fontSize: 22,
    color: theme.COLORS.TEXT,
    marginLeft: "auto",
  },
  navigationText: {
    fontSize: 20,
    lineHeight: 23,
    color: theme.COLORS.TEXT,
    marginRight: "auto",
  },
  disabledButton: {
    backgroundColor: theme.COLORS.DISABLED_BUTTON,
  },
  disabledIcon: {
    color: theme.COLORS.DISABLED_ICON,
  },
}))