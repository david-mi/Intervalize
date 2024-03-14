import TextWithCustomFont from "@shared/TextWithCustomFont/TextWithCustomFont";
import * as React from "react"

import { styles } from "./currentExerciseName.styles";

interface Props {
  scrollHandler: () => void
  currentExerciseName: string
}

function CurrentExerciseName({ scrollHandler, currentExerciseName }: Props) {
  React.useEffect(() => {
    setTimeout(scrollHandler, 150)
  }, [])

  return (
    <TextWithCustomFont fontFamily="oswald-bold" style={styles.currentExercise}>
      {currentExerciseName}
    </TextWithCustomFont>
  )
}

export default CurrentExerciseName;