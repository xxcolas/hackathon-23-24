import User from "../models/user.js"

export const getUserByEmail = async (email) => {
  const query = { email }
  const users = await User.find({}).select(query)
  console.log(users)

  return users[0]
}