import * as React from "react"
import { styles } from "./otherExerciseName.styles"
import TextWithCustomFont from "../../../../../TextWithCustomFont/TextWithCustomFont";

interface Props {
  exerciseName: string
  exerciseIndex: number
  currentExerciseIndex: number
}

function OtherExerciseName({ currentExerciseIndex, exerciseIndex, exerciseName }: Props) {
  return (
    <TextWithCustomFont
      style={{
        ...styles.otherExerciseName,
        fontSize: 15 / Math.abs(currentExerciseIndex - exerciseIndex)
      }}
    >
      {exerciseName}
    </TextWithCustomFont>
  )
}

export default OtherExerciseName;