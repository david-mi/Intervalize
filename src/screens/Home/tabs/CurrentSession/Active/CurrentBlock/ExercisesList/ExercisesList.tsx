import * as React from "react"
import { FlatList, View } from "react-native";
import { styles } from "./exercisesList.styles";
import type { Exercise } from "@/types";
import CurrentExerciseName from "./CurrentExerciseName/CurrentExerciseName";
import OtherExerciseName from "./OtherExerciseName/OtherExerciseName";

interface Props {
  exercises: Exercise[]
  currentExercise: Exercise
}

function ExercisesList({ currentExercise, exercises }: Props) {
  const flatListRef = React.useRef<FlatList>(null!)

  return (
    <View pointerEvents={"none"} style={styles.exercisesListContainer}>
      <FlatList
        data={exercises}
        contentContainerStyle={styles.exercisesList}
        ref={flatListRef}
        renderItem={({ item, index }) => item.id === currentExercise.id
          ? (
            <CurrentExerciseName
              currentExerciseName={currentExercise.name}
              scrollHandler={() => {
                flatListRef.current?.scrollToIndex({ index, viewOffset: 10 })
              }}
            />
          )
          : <OtherExerciseName exerciseName={item.name} />
        }
      />
    </View>
  );
}

export default ExercisesList;