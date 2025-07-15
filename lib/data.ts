import type { Base, Event, Soldier } from "./types"

export const soldiers: Soldier[] = [
  {
    id: "S-001",
    name: "John Smith",
    base: "Alpha Base",
    city: "Fort Worth",
    status: "Active",
    skills: ["Combat", "First Aid", "Navigation"],
    biometrics: {
      bloodFlow: 5.2,
      temperature: 37.1,
      adrenaline: 120,
      heartRate: 72,
      spO2: 98,
      respiratoryRate: 16,
      hrv: 65,
      systolic: 120,
      diastolic: 80,
      stressLevel: 3,
    },
    location: {
      lat: 32.7555,
      lng: -97.3308,
      formatted: "Fort Worth, TX",
    },
    imageUrl: "/placeholder.svg?height=200&width=200",
  },
  // Add more soldiers here...
]

export const bases: Base[] = [
  {
    id: "B-001",
    name: "Alpha Base",
    location: {
      lat: 32.7555,
      lng: -97.3308,
      formatted: "Fort Worth, TX",
    },
    soldiers: 150,
  },
  // Add more bases here...
]

export const events: Event[] = [
  {
    id: "E-001",
    type: "INFO",
    description: "System login successful - Admin user",
    timestamp: new Date().toISOString(),
  },
  // Add more events here...
]

