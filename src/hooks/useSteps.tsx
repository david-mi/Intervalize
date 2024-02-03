import * as React from "react"
import { GlobalContext } from "../context/GlobalContext"
import { useStepTimer } from "./useStepTimer"

export function useSteps() {
  const { setSessionStatus, currentSession } = React.useContext(GlobalContext)
  const currentStepIndexRef = React.useRef(0)
  const currentStep = currentSession!.steps[currentStepIndexRef.current]
  const {
    remainingCurrentStepMinutes,
    remainingCurrentStepSeconds,
    finishedStepTrigger,
    setCurrentStepTimer
  } = useStepTimer(currentStep.duration)

  React.useEffect(() => {
    const nextStepIndex = currentStepIndexRef.current + 1
    const nextStep = currentSession!.steps[nextStepIndex]

    if (!nextStep) {
      setSessionStatus("FINISHED")
    } else {
      currentStepIndexRef.current += 1
      setCurrentStepTimer(nextStep.duration)
    }
  }, [finishedStepTrigger])

  return {
    currentStepName: currentStep.name,
    remainingCurrentStepMinutes,
    remainingCurrentStepSeconds
  }
}