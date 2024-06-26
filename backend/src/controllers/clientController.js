import mongoose from "mongoose"
import { getClient } from "../services/clientService.js";

export const getAllClient = async (req, res) => {
    try {
      const clients = await getClient();
      return res.status(200).json({ clients });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
}