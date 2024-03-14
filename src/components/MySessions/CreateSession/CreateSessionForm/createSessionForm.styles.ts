import { StyleSheet } from "react-native";

import { globalStyle } from "@/styles/styles.variables.global";

export const styles = StyleSheet.create({
  form: {
    flex: 1,
    gap: globalStyle.gap,
    padding: globalStyle.padding,
  },
  title: {
    fontSize: 25,
    alignSelf: "center",
  },
  labelInputContainer: {
    gap: 5,
  },
  label: {
    fontWeight: "500",
  },
  input: {
    height: 60,
    fontSize: 15,
    padding: globalStyle.padding / 2,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 5,
  },
  blocks: {
    flex: 1,
    borderColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  blocksTitle: {
    fontSize: 20,
    alignSelf: "center",
  },
  addBlockButton: {
    marginTop: "auto",
    alignSelf: "flex-end",
  },
  saveSessionButton: {
    backgroundColor: "red",
    marginTop: "auto",
    alignSelf: "stretch",
  },
})