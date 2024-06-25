import User from "../models/userModel.js"

export const getUserByEmail = async (email) => {
  const users = await User.find({ email })

  return users[0]
}