import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  _id: String,
  email: String,
  password: String,
})

const User = mongoose.model('user', userSchema)

export default User