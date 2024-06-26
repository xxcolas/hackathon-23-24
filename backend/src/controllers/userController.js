import { getUserById, updateUserById } from "../services/userService.js"
import { getBase64FileFromPath } from "../utils/file.js"

export const updateUser = async (req, res) => {
  const { id } = req.params
  const { file } = req
  const { transcript } = req.body

  const feedback = {
    file: file.path,
    transcript
  }

  const updateUserResponse = await updateUserById(id, { feedback })

  return res.status(200).json(updateUserResponse)
}

export const getUser = async (req, res) => {
  const { id } = req.params
  const user = await getUserById(id)

  user.feedback.file = getBase64FileFromPath(user.file)

  return res.status(200).json(user)
}