import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    zIndex: 10,
    position: "absolute",
    top: -40,
    backgroundColor: "#ffffff",
    alignSelf: "center",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    position: "absolute",
    fontSize: 25,
    color: "black",
    lineHeight: 36
  },
  icon: {
    margin: -30,
    transform: [{ rotateX: "180deg" }]
  }
})