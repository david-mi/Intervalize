import * as React from "react"
import { Text } from "react-native"
import { GlobalContext } from "../../../context/GlobalContext"

function StepTimer() {
  const { sessionStatus, setSessionStatus, currentSession } = React.useContext(GlobalContext)
  const currentStepIndexRef = React.useRef(0)
  const currentStep = currentSession.steps[currentStepIndexRef.current]
  const [currentStepTimer, setCurrentStepTimer] = React.useState(currentStep.duration)

  React.useEffect(() => {
    if (sessionStatus === "FINISHED") return

    const intervalId = setTimeout(() => {
      if (currentStepTimer.seconds <= 0) {
        if (currentStepTimer.minutes <= 0) {
          const nextStepIndex = currentStepIndexRef.current + 1
          const nextStep = currentSession.steps[nextStepIndex]

          if (!nextStep) {
            setSessionStatus("FINISHED")
          } else {
            currentStepIndexRef.current += 1
            setCurrentStepTimer(nextStep.duration)
          }
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
  }, [currentStepTimer.seconds, sessionStatus])

  return (
    <Text>
      {currentStep.name} :
      {String(currentStepTimer.minutes).padStart(2, "0")}:
      {String(currentStepTimer.seconds).padStart(2, "0")}
    </Text>
  );
}

export default StepTimer;