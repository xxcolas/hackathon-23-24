const mistralService = require("../services/mistralService");

exports.getGptResponse = async (req, res) => {
  try {
    const chatResponse = await mistralService.getChatResponse();
    return res.status(200).json({ message: chatResponse });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
