require("dotenv").config({ path: ".env.local", override: true });

exports.getChatResponse = async () => {
  const { default: MistralClient } = await import("@mistralai/mistralai");

  const client = new MistralClient(process.env.MISTRAL_API_KEY);
  const chatResponse = await client.chat({
    model: "mistral-large-latest",
    response_format: { type: "json_object" },
    messages: [
      {
        role: "user",
        content:
          "What is the best French meal? Return the name and the ingredients in JSON format.",
      },
    ],
  });

  return chatResponse.choices[0].message.content;
};
