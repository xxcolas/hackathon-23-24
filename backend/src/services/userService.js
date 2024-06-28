import mongoose from "mongoose"
import User from "../models/userModel.js"
import { getBase64FileFromPath } from "../utils/file.js"

const replaceMessageFilePathWithFile = (userMessage) => {
  if (userMessage.type !== 'audio') {
    return userMessage
  }

  return { 
    ...userMessage, 
    audio: { 
      ...userMessage.audio, 
      file: getBase64FileFromPath(userMessage.audio.file)
    }
  }
}

export const getUserByEmail = async (email) => {
  return await User.findOne({ email })
}

export const updateUserById = async (id, updatedUser) => {
  return await User.findOneAndUpdate({ _id: id }, updatedUser, { returnDocument: 'after' })
}

export const getUserById = async (id) => {
  return await User.findOne({ _id: id })
}

export const getUserMessagesWithFile = (userMessages) => {
  return userMessages.map(replaceMessageFilePathWithFile)
}

export const getUsersByType = async (type) => {
  return await User.find({ type: type })
}

export const addUserMessageById = async (id, messages) => {
  const userId = new mongoose.Types.ObjectId(id);
  const client = await mongoose.connection.db
    .collection("users")
    .findOne({ _id: userId });

  if (!client) {
    return null
  }

  return await mongoose.connection.db.collection("users").updateOne(
    { _id: userId },
    {
      $push: {
        messages: messages,
      },
    }
  );
};