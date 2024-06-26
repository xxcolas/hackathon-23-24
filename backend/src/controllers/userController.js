import { getUserById, updateUserById } from "../services/userService.js"
import { getBase64FileFromPath } from "../utils/file.js"

export const updateUser = async (req, res) => {
  console.log("enteeeers")
  const { id } = req.params
  const { file } = req

  console.log("--------------------------")
  console.log(id)
  console.log(file)

  const updateUserResponse = await updateUserById(id, { file: file.path })

  return res.status(200).json(updateUserResponse)
}

export const getUser = async (req, res) => {
  const { id } = req.params
  const user = await getUserById(id)

  user.file = getBase64FileFromPath(user.file)

  console.log(user)

  return res.status(200).json(user)
}