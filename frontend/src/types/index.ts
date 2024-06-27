export type User = {
  email: string
  firstname: string
  priority: Priority
  type: "PATIENT" | "PRACTITIONER"
  tel: string
  _id: string
  messages: Message[]
  psychological_state: PsychologicalState 
}
export type PsychologicalState = "anxious" | "stable" | "angry" | "sad" | "undefined"
export type Priority = "low" | "medium" | "high" | "undefined"
export type Message = {
  text?: string
  sender: "PATIENT" | "PRACTITIONER"
  date: any
  type: "text" | "audio"
  audio?: {
    file: string
    summary: string
    transcript: string
  }
}
export type AuthToken = {
  id: string
  iat: number
}
