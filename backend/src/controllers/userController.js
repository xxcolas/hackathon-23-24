import getChatResponse from "../services/mistralService.js"
import { getUserById, getUserMessagesWithFile, updateUserById } from "../services/userService.js"
import { getBase64FileFromPath } from "../utils/file.js"

export const updateUser = async (req, res) => {
  const { id } = req.params
  const { file } = req
  const { transcript } = req.body

  const analysis = JSON.parse(await getChatResponse(transcript))

  const audioMessage = {
    type: "audio",
    date: "test",
    sender: "PATIENT",
    audio: {
      file: file.path,
      transcript,
      summary: analysis.description,
    }
  }

  const user = await getUserById(id)
  console.log(user)

  const updateUserResponse = await updateUserById(id, { 
    messages: [...user.messages, audioMessage], 
    priority: analysis.priority 
  })

  return res.status(200).json(updateUserResponse)
}

export const getUser = async (req, res) => {
  const { id } = req.params
  const user = await getUserById(id)

  user.messages = getUserMessagesWithFile(user.messages)

  return res.status(200).json(user)
}