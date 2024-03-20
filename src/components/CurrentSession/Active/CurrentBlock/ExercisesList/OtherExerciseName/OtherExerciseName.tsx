import TextWithCustomFont from "@shared/TextWithCustomFont/TextWithCustomFont"
import * as React from "react"
import { useStyles } from "react-native-unistyles"

import { styles as styleSheet } from "./otherExerciseName.styles"

interface Props {
  exerciseName: string
}

function OtherExerciseName({ exerciseName }: Props) {
  const { styles } = useStyles(styleSheet)

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