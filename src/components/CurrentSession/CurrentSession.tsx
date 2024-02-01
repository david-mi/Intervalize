import * as React from 'react';
import { Text, View } from 'react-native';
import { mockSession as currentSession } from "../../mocks";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

function CurrentSession() {
  const { sessionStatus, setSessionStatus } = useContext(GlobalContext)
  const [sessionTimer, setSessionTimer] = React.useState({
    minutes: 0,
    seconds: 0
  })

  const currentStepIndexRef = React.useRef(0)
  const currentStep = currentSession.steps[currentStepIndexRef.current]
  const [currentStepTimer, setCurrentStepTimer] = React.useState(currentStep.duration)

  React.useEffect(() => {
    if (sessionStatus === "FINISHED") return

    const intervalId = setTimeout(() => {
      if (sessionTimer.seconds === 59) {
        setSessionTimer(({ minutes }) => ({
          minutes: minutes + 1,
          seconds: 0
        }))
      } else {
        setSessionTimer(({ minutes, seconds }) => ({
          minutes,
          seconds: seconds + 1
        }))
      }
    }, 1000)

    return () => {
      clearTimeout(intervalId)
    }
  }, [sessionTimer.seconds, sessionStatus])

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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {sessionStatus === "STARTED"
        ? (
          <>
            <Text>
              TEMPS TOTAL :
              {String(sessionTimer.minutes).padStart(2, "0")}:
              {String(sessionTimer.seconds).padStart(2, "0")}
            </Text>
            <Text>
              {currentStep.name} :
              {String(currentStepTimer.minutes).padStart(2, "0")}:
              {String(currentStepTimer.seconds).padStart(2, "0")}
            </Text>
          </>
        )
        : <Text> Session Terminée</Text>
      }
    </View>
  );
}

export default CurrentSession;