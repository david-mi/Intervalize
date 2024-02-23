import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  define: {
    backgroundColor: "red",
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
    color: "white",
    fontStyle: "italic",
    fontWeight: "500",
    marginTop: 20,
  },
})