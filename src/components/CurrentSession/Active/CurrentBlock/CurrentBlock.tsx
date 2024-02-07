import * as React from "react"
import { View, FlatList } from "react-native"
import { useBlocks } from "../../../../hooks/useBlocks";
import CurrentExercise from "./CurrentExercise/CurrentExercise";
import Repetitions from "./Repetitions/Repetitions";
import { styles } from "./currentBlock.styles";
import TextWithCustomFont from "../../../TextWithCustomFont/TextWithCustomFont";

interface WrapperProps {
  scrollHandler: () => void
  currentExerciseName: string
}

function Wrapper({ scrollHandler, currentExerciseName }: WrapperProps) {
  React.useEffect(() => {
    console.log("scroll Handler")
    setTimeout(scrollHandler, 100)
  }, [])

  return (
    <TextWithCustomFont fontFamily="oswald-bold" style={styles.title}>{currentExerciseName}</TextWithCustomFont>
  )
}

function CurrentBlock() {
  const {
    currentBlock,
    remainingCurrentBlockRepetitions,
    currentExerciseName,
    formattedRemainingCurrentExerciseTime,
    currentExerciseIndex
  } = useBlocks()
  const flatListRef = React.useRef<FlatList>(null!)

  return (
    <View style={styles.container}>
      <Repetitions
        currentBlockRepetitions={currentBlock.repetitions}
        remainingCurrentBlockRepetitions={remainingCurrentBlockRepetitions}
      />
      <View style={styles.exercisesListContainer}>
        <FlatList
          data={currentBlock.exercises}
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
      <CurrentExercise
        currentExerciseName={currentExerciseName}
        formattedRemainingCurrentExerciseTime={formattedRemainingCurrentExerciseTime}
      />
    </View>
  );
}

export default CurrentBlock;