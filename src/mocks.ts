import type { Session } from "./types"

export const mockSession: Session = {
  createdAt: new Date(),
  name: "Mock Interval Session",
  steps: [
    {
      duration: {
        minutes: 0,
        seconds: 15,
      },
      intensityLevel: "LOW",
      name: "Echauffement Running"
    },
    {
      duration: {
        minutes: 0,
        seconds: 10
      },
      intensityLevel: "MEDIUM",
      name: "Course Moyenne"
    },
    {
      duration: {
        minutes: 0,
        seconds: 5
      },
      intensityLevel: "HARD",
      name: "Course Rapide"
    },
    {
      duration: {
        minutes: 0,
        seconds: 20
      },
      intensityLevel: "LOW",
      name: "Marche de récupération"
    },
  ]
}