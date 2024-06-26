import getChatResponse from "../services/mistralService.js";
import mongoose from "mongoose";

const gptController = async (req, res) => {
  // const { userMessage } = req.body;
	// TODO : get userMessage from the request body instead of hardcoding it
  const userMessage =
    "Je saigne énormement j'ai besoin d'aide. Tout était parfait sauf qu'on ne m'a pas averti que 3 gouttes de pipi ne suffisait pas à ma sortie : j'ai dû revenir le lendemain et me faire poser une sonde urinaire ! Il y a une erreur : cette opération a été annulée au profit de la pose d'un patch à 15h demain. Quelques gouttes sur la cicatrice mais d après l infirmières il n y a pas d infection.";
  const chatResponse = await getChatResponse(userMessage);

  AddUserDescription(chatResponse);

  try {
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

async function AddUserDescription(chatResponse) {
  try {
    let userId = new mongoose.Types.ObjectId("667a9c7331b65ecde0d6ac6b");
    const user = await mongoose.connection.db
      .collection("users")
      .findOne({ _id: userId });

    if (user) {
      const jsonObject = JSON.parse(chatResponse);

      await mongoose.connection.db.collection("users").updateOne(
        { _id: userId },
        {
          $set: {
            descriptions: [
              {
								description: jsonObject.description,
								priority: jsonObject.priority,
              },
            ],
          },
        }
      );
    }
  } catch (err) {
		console.log(err);
  }
}

export default gptController;
