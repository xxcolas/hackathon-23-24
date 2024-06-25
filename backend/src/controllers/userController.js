import { updateUserById } from "../services/userService"

export const updateUser = async (req, res) => {
  const updatedFields = req.body
  const { id } = req.params

  const updateUserResponse = await updateUserById(id, updatedFields)

  return res.status(200).json(updateUserResponse)
}