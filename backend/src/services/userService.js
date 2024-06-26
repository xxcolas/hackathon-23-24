import mongoose from "mongoose"
import User from "../models/userModel.js"

export const getUserByEmail = async (email) => {
  return await User.findOne({ email })
}

export const updateUserById = async (id, updatedUser) => {
  return await User.findOneAndUpdate({ _id: id }, updatedUser, { returnDocument: 'after' })
}

export const getUserById = async (id) => {
  return await User.findOne({ _id: id })
}
