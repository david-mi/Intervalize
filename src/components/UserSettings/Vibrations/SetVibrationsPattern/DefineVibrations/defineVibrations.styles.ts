import { StyleSheet } from "react-native";
import { createStyleSheet } from "react-native-unistyles";

export const styles = createStyleSheet((theme) => ({
  define: {
    backgroundColor: theme.COLORS.TERTIARY,
    alignItems: "center",
    height: 250,
    width: 250,
    borderRadius: 50,
  },
  pressIconWrapper: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  instructions: {
    color: theme.COLORS.TEXT_LIGHT,
    fontStyle: "italic",
    fontWeight: "500",
    marginTop: 20,
  },
}))