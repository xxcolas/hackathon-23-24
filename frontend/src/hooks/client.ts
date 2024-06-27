import { url } from "@/constants"
import { User } from "@/types/index"

const getAllClient = async (): Promise<User[]> => {
  try {
    const result = await fetch(`${url}/users/type/patient`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // include: "credentials",
    })

    if (result.ok) {
      return await result.json();
    } else {
      throw new Error("La requête a échoué")
    }
  } catch (error) {
    console.error("Erreur lors de la recherche :", error)
    throw error
  }
}

export { getAllClient }
