import * as React from "react"
import { Text } from "react-native"
import { GlobalContext } from "../../../context/GlobalContext"

function SessionTimer() {
  const { sessionStatus, setSessionStatus } = React.useContext(GlobalContext)
  const [sessionTimer, setSessionTimer] = React.useState({
    minutes: 0,
    seconds: 0
  })

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

  return (
    <Text>
      TEMPS TOTAL :
      {String(sessionTimer.minutes).padStart(2, "0")}:
      {String(sessionTimer.seconds).padStart(2, "0")}
    </Text>
  );
}

export default SessionTimer;