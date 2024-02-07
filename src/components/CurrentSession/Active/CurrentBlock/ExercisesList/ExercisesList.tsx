import * as React from "react"
import { FlatList, View } from "react-native";
import { styles } from "./exercisesList.styles";
import { Exercise } from "../../../../../types";
import CurrentExerciseName from "./CurrentExerciseName/CurrentExerciseName";
import OtherExerciseName from "./OtherExerciseName/OtherExerciseName";

interface Props {
  exercises: Exercise[]
  currentExerciseName: string
  currentExerciseIndex: number
}

function ExercisesList({ currentExerciseIndex, currentExerciseName, exercises }: Props) {
  const flatListRef = React.useRef<FlatList>(null!)

  return (
    <View style={styles.exercisesListContainer}>
      <FlatList
        data={exercises}
        contentContainerStyle={styles.exercisesList}
        ref={flatListRef}
        renderItem={({ item, index }) => item.name === currentExerciseName
          ? <CurrentExerciseName
            currentExerciseName={currentExerciseName}
            scrollHandler={() => {
              setTimeout(() => {
                flatListRef.current?.scrollToIndex({ index, viewOffset: 15 })
              }, 150)
            }}
          />
          : <OtherExerciseName
            currentExerciseIndex={currentExerciseIndex}
            exerciseIndex={index}
            exerciseName={item.name}
          />
        }
      />
    </View>
  );
}

export default ExercisesList;