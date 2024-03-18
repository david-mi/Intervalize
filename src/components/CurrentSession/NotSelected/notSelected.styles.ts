import { createStyleSheet } from "react-native-unistyles";

export const styles = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    alignSelf: "stretch",
  },
  infos: {
    flexBasis: "50%",
  },
  title: {
    fontSize: 35,
    backgroundColor: theme.COLORS.TERTIARY,
    textAlign: "center",
    lineHeight: 50,
    paddingVertical: 25,
    color: theme.COLORS.TEXT_LIGHT,
  },
  instructions: {
    marginTop: "auto",
    fontSize: 20,
    textAlign: "center",
    color: theme.COLORS.TEXT,
  },
  button: {
    alignSelf: "stretch",
    marginBottom: "auto",
    marginTop: "auto",
  },
}))