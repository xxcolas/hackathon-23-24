import MistralClient from "@mistralai/mistralai";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local", override: true });

const getChatResponse = async () => {
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
          "Je veux absolument cette forme d'objet JSON et rien d'autres: '{ 'description': '- Problème de santé, - Urine partiel', 'priority': 'low' }'." +
          "Voici le texte que tu vas devoir traiter: Je saigne énormement j'ai besoin d'aide. Tout était parfait sauf qu'on ne m'a pas averti que 3 gouttes de pipi ne suffisait pas à ma sortie : j'ai dû revenir le lendemain et me faire poser une sonde urinaire ! Il y a une erreur : cette opération a été annulée au profit de la pose d'un patch à 15h demain. Quelques gouttes sur la cicatrice mais d après l infirmières il n y a pas d infection.",
      },
    ],
  });

  return chatResponse.choices[0].message.content;
};

export default getChatResponse;
