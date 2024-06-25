import User from "../models/userModel.js"

export const getClient = async () => {
  const client = await User.find({ type: "PATIENT" });

  return client;
}
