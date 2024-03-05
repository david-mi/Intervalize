import { StyleSheet } from "react-native";

import { globalStyle } from "@/styles/styles.variables.global";

export const styles = StyleSheet.create({
  form: {
    flex: 1,
    gap: globalStyle.gap,
    padding: globalStyle.padding,
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
  title: {
    fontSize: 25,
    alignSelf: "center",
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
  closeModalButton: {
    position: "absolute",
    top: 0,
    right: globalStyle.gap / 4,
  },
  closeModalButtonIcon: {
    fontSize: 40,
  },
  saveSessionButton: {
    backgroundColor: "red",
    marginTop: "auto",
    alignSelf: "stretch",
  },
  createSessionButton: {
    backgroundColor: "red",
  },
})