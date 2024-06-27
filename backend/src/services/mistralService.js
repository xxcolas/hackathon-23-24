import MistralClient from "@mistralai/mistralai";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local", override: true });

const desiredJsonObject = {
  description:
    "Un objet JSON contenant un résumé simple du texte et un ordre de priorité. (Ex de description: Mal de dos, Fatigue, Stress)",
  priority: "low",
  psychological_state: '"anxious" | "stable" | "angry" | "sad" | "undefined"',
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
          "Je veux un résumé simple de ce texte. " +
          "Je veux également que tu me donnes un ordre de priorité (ex: low, medium, high). " +
          "Je veux absolument cette forme d'objet JSON et rien d'autres: " +
          JSON.stringify(desiredJsonObject) +
          "Voici le texte que tu vas devoir traiter: " +
          "Les douleurs sont principalement autour de la cicatrice et parfois elles irradient dans mon bas-ventre. Sur une échelle de 1 à 10, je dirais qu'elles sont souvent autour de 7 ou 8. Cela me préoccupe beaucoup car j'ai du mal à bouger et ça affecte mon moral. Je me sens vraiment déprimée et anxieuse à cause de ça.",
      },
    ],
  });

  return chatResponse.choices[0].message.content;
};

export default getChatResponse;
