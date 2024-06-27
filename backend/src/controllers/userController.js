import getChatResponse from "../services/mistralService.js"
import { getUserById, getUserMessagesWithFile, getUsersByType, updateUserById } from "../services/userService.js"

export const updateUser = async (req, res) => {
  const { id } = req.params
  const { file } = req
  const { transcript } = req.body

  const analysis = JSON.parse(await getChatResponse(transcript))

  const audioMessage = {
    type: "audio",
    date: new Date(),
    sender: "PATIENT",
    audio: {
      file: file.path,
      transcript,
      summary: analysis.description,
    }
  }

  const user = await getUserById(id)

  const updateUserResponse = await updateUserById(id, { 
    messages: [...user.messages, audioMessage], 
    priority: analysis.priority,
    psychological_state: analysis.psychological_state
  })

  return res.status(200).json(updateUserResponse)
}

export const getUser = async (req, res) => {
  const { id } = req.params
  const user = await getUserById(id)

  user.messages = getUserMessagesWithFile(user.messages)

  return res.status(200).json(user)
}

export const getPatients = async (req, res) => {
  const patients = await getUsersByType("PATIENT")

  const patientsWithFile = patients.map(patient => {
    patient.messages = getUserMessagesWithFile(patient.messages)
    return patient
  })

  return res.status(200).json(patientsWithFile)
}