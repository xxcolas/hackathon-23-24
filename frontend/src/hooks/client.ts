import { Clients } from "@/types/index";

const getAllClient = async (): Promise<Clients[]> => {
  try {
    const result = await fetch(`http://localhost:3000/client`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // include: "credentials",
    });

    if (result.ok) {
      const data = await result.json();
      return data.clients;
    } else {
      throw new Error("La requête a échoué");
    }
  } catch (error) {
    console.error("Erreur lors de la recherche :", error);
    throw error;
  }
};

export { getAllClient };
