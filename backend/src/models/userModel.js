import mongoose from "mongoose";

const { Schema } = mongoose;

const messageSchema = new Schema(
  {
    text: String,
    type: String,
    date: Date,
    sender: String,
    audio: {
      file: String,
      transcript: String,
      summary: String,
    },
  },
  { _id: false }
);

const userSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  email: String,
  firstname: String,
  password: String,
  type: String,
  priority: String,
  psychological_state: String,
  messages: [messageSchema],
});

const User = mongoose.model("user", userSchema);

export default User;
