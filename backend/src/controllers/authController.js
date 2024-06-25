import mongoose from "mongoose"
import { getUserByEmail } from "../services/userService.js";
import { isPasswordMatching } from "../utils/password.js";
import jwt from "jsonwebtoken"

export const authentication = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await getUserByEmail(email)

    if (!user) {
      return res.status(404).json({ error: "User not found" })
    }

    if (!isPasswordMatching(password, user.password)) {
      console.log(password, user.password)
      return res.status(404).json({ error: "User not found" })
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)

    return res.status(200).json({ token: token })
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}