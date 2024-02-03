import * as React from "react"
import { Step } from "../types"

export function useStepTimer(currentStepDuration: Step["duration"]) {
  const [finishedStepTrigger, setfinishedStepTrigger] = React.useState(false)
  const [currentStepTimer, setCurrentStepTimer] = React.useState(currentStepDuration)

  React.useEffect(() => {
    const intervalId = setTimeout(() => {
      if (currentStepTimer.seconds <= 0) {
        if (currentStepTimer.minutes <= 0) {
          setfinishedStepTrigger(finishedStepTrigger => !finishedStepTrigger)
        } else {
          setCurrentStepTimer(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59
          }))
        }

      } else {
        setCurrentStepTimer(({ minutes, seconds }) => ({
          minutes,
          seconds: seconds - 1
        }))
      }
    }, 1000)

    return () => {
      clearTimeout(intervalId)
    }
  }, [currentStepTimer.seconds])

  return {
    setCurrentStepTimer,
    remainingCurrentStepMinutes: String(currentStepTimer.minutes).padStart(2, "0"),
    remainingCurrentStepSeconds: String(currentStepTimer.seconds).padStart(2, "0"),
    finishedStepTrigger
  }
}