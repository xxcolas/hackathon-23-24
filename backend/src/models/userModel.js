import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  email: String,
  password: String,
  type: String,
  file: String,
  feedback: {
    file: String,
    transcript: String,
  },
})

const User = mongoose.model('user', userSchema)

export default User