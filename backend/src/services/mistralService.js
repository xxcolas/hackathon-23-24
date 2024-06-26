import MistralClient from "@mistralai/mistralai";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local", override: true });

const desiredJsonObject = {
  description:
    "- Problème de santé, - Urine partiel, - Pose de sonde urinaire, - Changement d'opération pour la pose d'un patch",
  priority: "low",
};

const getChatResponse = async (userMessage) => {
  const client = new MistralClient(process.env.MISTRAL_API_KEY);
  const chatResponse = await client.chat({
    // model: "open-mixtral-8x7b",
    model: "mistral-large-2402",
    response_format: { type: "json_object" },
    messages: [
      {
        role: "system",
        content:
          "Tu es un assistant dans la rédaction et la synthétisation de texte en francais.",
      },
      {
        role: "user",
        content:
          "Je veux un résumé simple de ce texte sous forme de tirets. " +
          "Je veux également que tu me donnes un ordre de priorité (ex: low, medium, high). " +
          "Je veux absolument cette forme d'objet JSON et rien d'autres: " +
          JSON.stringify(desiredJsonObject) +
          "Voici le texte que tu vas devoir traiter: " +
          userMessage,
      },
    ],
  });

  return chatResponse.choices[0].message.content;
};

export default getChatResponse;
