import User from "../models/userModel.js"
import { getBase64FileFromPath } from "../utils/file.js"

export const getUserByEmail = async (email) => {
  return await User.findOne({ email })
}

export const updateUserById = async (id, updatedUser) => {
  return await User.findOneAndUpdate({ _id: id }, updatedUser, { returnDocument: 'after' })
}

export const getUserById = async (id) => {
  return await User.findOne({ _id: id })
}

const replaceMessageFilePathWithFile = (userMessage) => {
  console.log("----------------")
  console.log(userMessage)
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

export const getUserMessagesWithFile = (userMessages) => {
  return userMessages.map(replaceMessageFilePathWithFile)
}