import { PsychologicalState } from "./types/index"
export const url = import.meta.env.VITE_API_URL

export const psychologicalState = {
  anxious: { color: "purple", string: "Anxieux" },
  stable: { color: "green", string: "Stable" },
  angry: { color: "red", string: "En colère" },
  sad: { color: "blue", string: "Triste" },
  undefined: { color: "gray", string: "Non défini" },
}
