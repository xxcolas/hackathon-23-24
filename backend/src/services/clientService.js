import User from "../models/userModel.js";
import mongoose from "mongoose";

export const getClient = async () => {
  const client = await User.find({ type: "PATIENT" });

  return client;
};

export const addMessage = async (id, messages) => {
  let userId = new mongoose.Types.ObjectId(id);

  const client = await mongoose.connection.db
    .collection("users")
    .findOne({ _id: userId });

  if (!client) {
    return res.status(404).json({ error: "Client not found" });
  }

  await mongoose.connection.db.collection("users").updateOne(
    { _id: userId },
    {
      $push: {
        messages: messages,
      },
    }
  );
};
