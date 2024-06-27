import { url } from "@/constants"
import { User } from "@/types/index"

const getAllClient = async (): Promise<User[]> => {
  try {
    const result = await fetch(`${url}/client`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // include: "credentials",
    })

    if (result.ok) {
      const data = await result.json()
      return data.clients
    } else {
      throw new Error("La requête a échoué")
    }
  } catch (error) {
    console.error("Erreur lors de la recherche :", error)
    throw error
  }
}

export { getAllClient }
