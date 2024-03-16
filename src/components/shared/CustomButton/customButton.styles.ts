import { StyleSheet } from "react-native";

import { THEME } from "@/constants/theme";

export const styles = StyleSheet.create({
  rectangle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 25,
    borderRadius: 4,
    shadowColor: THEME.COLORS.SECONDARY,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.20,
    shadowRadius: 5.62,
    elevation: 7,
    backgroundColor: THEME.COLORS.SECONDARY,
  },
  rectangleIcon: {
    fontSize: 24,
    color: THEME.COLORS.TEXT_LIGHT,
  },
  text: {
    fontSize: 20,
    color: THEME.COLORS.TEXT_LIGHT,
  },
  control: {
    backgroundColor: THEME.COLORS.SECONDARY,
    borderRadius: 50,
  },
  controlIcon: {
    padding: 15,
    fontSize: 50,
    color: THEME.COLORS.TEXT_LIGHT,
  },
  navigation: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 25,
    gap: THEME.SPACINGS.GAP,
  },
  navigationThemeIcon: {
    fontSize: 18,
    color: THEME.COLORS.TEXT,
  },
  navigationArrowIcon: {
    fontSize: 22,
    color: THEME.COLORS.TEXT,
    marginLeft: "auto",
  },
  navigationText: {
    fontSize: 20,
    lineHeight: 23,
    color: THEME.COLORS.TEXT,
    marginRight: "auto",
  },
  disabledButton: {
    backgroundColor: THEME.COLORS.DISABLED_BUTTON,
  },
  disabledIcon: {
    color: THEME.COLORS.DISABLED_ICON,
  },
})