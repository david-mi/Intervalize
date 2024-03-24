import type { SessionType } from "@/types"

export const mockSessions: SessionType[] = [
  {
    id: "af7c1fe6-d669-414e-b066-e9733f0de7a8",
    createdAt: new Date(2024, 0, 16).toISOString(),
    name: "Mock Session 1",
    blocks: [
      {
        id: "1a46b3b4-0b3b-4b3b-9d2d-731ed6b3397d",
        name: "First block",
        iterations: 2,
        exercises: [
          {
            id: "1a25483b-02bb-4044-9d2d-731ed6b3397d",
            duration: {
              minutes: 80,
              seconds: 4,
            },
            intensityLevel: "LOW",
            name: "Course lente",
          },
        ],
      },
      {
        id: "4b3b9d2d-731ed6b3397d-1a46b3b4-0b3b",
        name: "Second block",
        iterations: 2,
        exercises: [
          {
            id: "bd8f22f5-c624-4a47-b09a-67b00b6f10fd",
            duration: {
              minutes: 0,
              seconds: 3,
            },
            intensityLevel: "MEDIUM",
            name: "Course Moyenne",
          },
          {
            id: "316ce3ec-afec-4b33-b5ac-25e1c855f40f",
            duration: {
              minutes: 0,
              seconds: 4,
            },
            intensityLevel: "HIGH",
            name: "Course Rapide",
          },
          {
            id: "a8219f5a-0a18-4a8b-b619-48a0edf7ff34",
            duration: {
              minutes: 0,
              seconds: 2,
            },
            intensityLevel: "LOW",
            name: "Marche de récupération",
          },
        ],
      },
      {
        id: "7d6b3397d-1a46b3b4-0b3b-4b3b9d2d",
        name: "Third Block",
        iterations: 1,
        exercises: [
          {
            id: "7c2e35e6-0e90-499f-8d5b-14b17b3bc924",
            duration: {
              minutes: 0,
              seconds: 7,
            },
            intensityLevel: "LOW",
            name: "Course lente",
          },
        ],
      },
    ],
  },
  {
    id: "08c71152-c552-42e7-b094-f510ff44e9cb",
    createdAt: new Date(2024, 1, 1).toISOString(),
    name: "Mock Session 2",
    blocks: [
      {
        id: "54f1b1b4-0b3b-4b3b-9d2d-731ed6b3397d",
        name: "First Block",
        iterations: 1,
        exercises: [
          {
            id: "af186e81-7086-4eb0-8a28-9e1f71c3d6d1",
            duration: {
              minutes: 0,
              seconds: 5,
            },
            intensityLevel: "MEDIUM",
            name: "Course à intensité moyenne",
          },
        ],
      },
      {
        id: "23b9d2d-731ed6b3397d-1a46b3b4-0b3b",
        name: "Second Block",
        iterations: 2,
        exercises: [
          {
            id: "b0e1e4d7-c72a-4783-8be8-cf956f40a903",
            duration: {
              minutes: 0,
              seconds: 3,
            },
            intensityLevel: "HIGH",
            name: "Sprint à VO2 Max",
          },
          {
            id: "2b33da7a-d497-4493-bb6a-413e203e83b1",
            duration: {
              minutes: 0,
              seconds: 4,
            },
            intensityLevel: "LOW",
            name: "Course à intensité faible",
          },
          {
            id: "51b8fe97-93fd-4ebd-8d0b-9300a8cf5b95",
            duration: {
              minutes: 0,
              seconds: 5,
            },
            intensityLevel: "MEDIUM",
            name: "Course à intensité moyenne",
          },
          {
            id: "34c23580-e07d-4da7-a5b4-738a3c2f0200",
            duration: {
              minutes: 0,
              seconds: 4,
            },
            intensityLevel: "HIGH",
            name: "Course à intensité élevée",
          },
        ],
      },
      {
        id: "99d2d-731ed6b3397d-1a46b3b4-0b3b-4b3b",
        name: "Third Block",
        iterations: 1,
        exercises: [
          {
            id: "5719515e-90e5-48c4-a7a8-34dcdcb3c72b",
            duration: {
              minutes: 0,
              seconds: 5,
            },
            intensityLevel: "LOW",
            name: "Course lente",
          },
        ],
      },
    ],
  },
];
