import User from "../models/userModel.js"

export const getUserByEmail = async (email) => {
  const users = await User.find({ email })

  return users[0]
}

export const updateUserById = async (id, updatedFields) => {
  const user = await User.updateOne({ _id: id }, updatedFields)

  return user
}
