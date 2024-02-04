import type { Session } from "./types"

export const mockSessions: Session[] = [
  {
    id: "af7c1fe6-d669-414e-b066-e9733f0de7a8",
    createdAt: new Date(2024, 0, 16),
    name: "Mock Session 1",
    blocks: [
      {
        repetitions: 2,
        exercises: [
          {
            duration: {
              minutes: 0,
              seconds: 4,
            },
            intensityLevel: "LOW",
            name: "Course lente"
          },
        ]
      },
      {
        repetitions: 2,
        exercises: [
          {
            duration: {
              minutes: 0,
              seconds: 3
            },
            intensityLevel: "MEDIUM",
            name: "Course Moyenne"
          },
          {
            duration: {
              minutes: 0,
              seconds: 4
            },
            intensityLevel: "HARD",
            name: "Course Rapide"
          },
          {
            duration: {
              minutes: 0,
              seconds: 2
            },
            intensityLevel: "LOW",
            name: "Marche de récupération"
          },
        ]
      },
      {
        repetitions: 1,
        exercises: [
          {
            duration: {
              minutes: 0,
              seconds: 7,
            },
            intensityLevel: "LOW",
            name: "Course lente"
          },
        ]
      }
    ]
  },
  {
    id: "08c71152-c552-42e7-b094-f510ff44e9cb",
    createdAt: new Date(2024, 1, 1),
    name: "Mock Session 2",
    blocks: [
      {
        repetitions: 1,
        exercises: [
          {
            duration: {
              minutes: 0,
              seconds: 5,
            },
            intensityLevel: "MEDIUM",
            name: "Course à intensité moyenne"
          },
        ]
      },
      {
        repetitions: 2,
        exercises: [
          {
            duration: {
              minutes: 0,
              seconds: 3
            },
            intensityLevel: "HARD",
            name: "Sprint à VO2 Max"
          },
          {
            duration: {
              minutes: 0,
              seconds: 4
            },
            intensityLevel: "LOW",
            name: "Cours à intensité faible"
          },
        ]
      },
      {
        repetitions: 1,
        exercises: [
          {
            duration: {
              minutes: 0,
              seconds: 5,
            },
            intensityLevel: "LOW",
            name: "Course lente"
          },
        ]
      }
    ]
  },
]