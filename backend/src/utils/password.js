import bcrypt from "bcrypt"

export const isPasswordMatching = (plainPassword, hashedPassword) => {
  return bcrypt.compare(plainPassword, hashedPassword)
}