import getChatResponse from "../services/mistralService.js";

const gptController = async (req, res) => {
  // const { userMessage } = req.body;
  const userMessage = "Je saigne énormement j'ai besoin d'aide. Tout était parfait sauf qu'on ne m'a pas averti que 3 gouttes de pipi ne suffisait pas à ma sortie : j'ai dû revenir le lendemain et me faire poser une sonde urinaire ! Il y a une erreur : cette opération a été annulée au profit de la pose d'un patch à 15h demain. Quelques gouttes sur la cicatrice mais d après l infirmières il n y a pas d infection.";
  const chatResponse = await getChatResponse(userMessage);
  try {
    return res.status(200).json({ message: chatResponse });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export default gptController;
