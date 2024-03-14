import TextWithCustomFont from "@shared/TextWithCustomFont/TextWithCustomFont"
import * as React from "react"

import { styles } from "./otherExerciseName.styles"

interface Props {
  exerciseName: string
}

function OtherExerciseName({ exerciseName }: Props) {
  return (
    <TextWithCustomFont
      style={{
        ...styles.otherExerciseName,
        transform: [{ scale: 0.6 }],
      }}
    >
      {exerciseName}
    </TextWithCustomFont>
  )
}

export default OtherExerciseName;