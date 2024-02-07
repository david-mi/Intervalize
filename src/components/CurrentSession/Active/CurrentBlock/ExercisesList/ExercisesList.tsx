import * as React from "react"
import { FlatList, View } from "react-native";
import TextWithCustomFont from "../../../../TextWithCustomFont/TextWithCustomFont";
import { styles } from "./exercisesList.styles";
import { Exercise } from "../../../../../types";

interface WrapperProps {
  scrollHandler: () => void
  currentExerciseName: string
}

function Wrapper({ scrollHandler, currentExerciseName }: WrapperProps) {
  React.useEffect(() => {
    setTimeout(scrollHandler, 100)
  }, [])

  return (
    <TextWithCustomFont fontFamily="oswald-bold" style={styles.title}>{currentExerciseName}</TextWithCustomFont>
  )
}

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
        renderItem={({ item, index }) => {
          return item.name === currentExerciseName
            ? <Wrapper
              currentExerciseName={currentExerciseName}
              scrollHandler={() => {
                flatListRef.current?.scrollToIndex({ index, viewOffset: 15, animated: true })
              }}
            />
            : <TextWithCustomFont
              style={{
                ...styles.notCurrentExercise,
                fontSize: 15 / Math.abs(currentExerciseIndex - index)
              }}
            >
              {item.name}
            </TextWithCustomFont>
        }}
      />
    </View>
  );
}

export default ExercisesList;