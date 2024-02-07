import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginTop: "auto",
    top: 25,
    marginBottom: "auto",
    borderWidth: 5,
    borderColor: "black",
    backgroundColor: "white",
  },
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