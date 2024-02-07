import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  exercisesList: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 200
  },
  exercisesListContainer: {
    paddingTop: 45,
    paddingBottom: 15,
    height: 145,
  },
  notCurrentExercise: {
    textAlign: "center",
    color: "grey",
    alignItems: "center"
  },
  title: {
    fontSize: 25,
    textAlign: "center",
  },
})