import * as React from "react"
import { styles } from "./currentExerciseName.styles";
import TextWithCustomFont from "../../../../../TextWithCustomFont/TextWithCustomFont";

interface Props {
  scrollHandler: () => void
  currentExerciseName: string
}

function CurrentExerciseName({ scrollHandler, currentExerciseName }: Props) {
  React.useEffect(() => {
    scrollHandler()
  }, [])

  return (
    <TextWithCustomFont fontFamily="oswald-bold" style={styles.currentExercise}>
      {currentExerciseName}
    </TextWithCustomFont>
  )
}

export default CurrentExerciseName;