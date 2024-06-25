import getChatResponse from "../services/mistralService.js";

const gptController = async (req, res) => {
  const chatResponse = await getChatResponse();
  try {
    return res.status(200).json({ message: chatResponse });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export default gptController;
