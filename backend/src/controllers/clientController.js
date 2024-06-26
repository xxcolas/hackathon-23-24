import { getClient, addMessage } from "../services/clientService.js";

export const getAllClient = async (req, res) => {
  try {
    const clients = await getClient();
    return res.status(200).json({ clients });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const addMessageClient = async (req, res) => {
  await addMessage(req.params.id, req.body.message);
  try {
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
