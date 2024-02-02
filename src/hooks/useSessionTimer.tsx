import * as React from "react"

export function useSessionTimer() {
  const [sessionTimer, setSessionTimer] = React.useState({
    minutes: 0,
    seconds: 0
  })

  React.useEffect(() => {
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
  }, [sessionTimer.seconds])

  return {
    elapsedMinutes: String(sessionTimer.minutes).padStart(2, "0"),
    elapsedSeconds: String(sessionTimer.seconds).padStart(2, "0")
  }
}