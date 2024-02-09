import * as React from "react"
import { styles } from "./otherExerciseName.styles"
import TextWithCustomFont from "@/components/TextWithCustomFont/TextWithCustomFont"

interface Props {
  exerciseName: string
}

function OtherExerciseName({ exerciseName }: Props) {
  return (
    <TextWithCustomFont
      style={{
        ...styles.otherExerciseName,
        transform: [{ scale: 0.6 }]
      }}
    >
      {exerciseName}
    </TextWithCustomFont>
  )
}

export default OtherExerciseName;