import bcrypt from "bcrypt"

export const isPasswordMatching = async (plainPassword, hashedPassword) => {
  return bcrypt.compareSync(plainPassword, hashedPassword)
}