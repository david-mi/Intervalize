import * as React from "react"
import { FlatList, View } from "react-native";
import { useStyles } from "react-native-unistyles";

import CurrentExerciseName from "./CurrentExerciseName/CurrentExerciseName";
import OtherExerciseName from "./OtherExerciseName/OtherExerciseName";
import { styles as styleSheet } from "./exercisesList.styles";

import type { Exercise } from "@/types";

interface Props {
  exercises: Exercise[]
  currentExercise: Exercise
}

function ExercisesList({ currentExercise, exercises }: Props) {
  const { styles } = useStyles(styleSheet)
  const flatListRef = React.useRef<FlatList>(null!)

  return (
    <View pointerEvents="none" style={styles.exercisesListContainer}>
      <FlatList
        contentContainerStyle={styles.exercisesList}
        data={exercises}
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