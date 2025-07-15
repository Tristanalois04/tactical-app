export interface Soldier {
  id: string
  name: string
  base: string
  city: string
  status: "Active" | "Resting" | "Training" | "Deployed"
  skills: string[]
  biometrics: {
    bloodFlow: number
    temperature: number
    adrenaline: number
    heartRate: number
    spO2: number
    respiratoryRate: number
    hrv: number
    systolic: number
    diastolic: number
    stressLevel: number
  }
  location: {
    lat: number
    lng: number
    formatted: string
  }
  imageUrl: string
}

export interface Base {
  id: string
  name: string
  location: {
    lat: number
    lng: number
    formatted: string
  }
  soldiers: number
}

export interface Event {
  id: string
  type: "INFO" | "ALERT"
  description: string
  timestamp: string
}

