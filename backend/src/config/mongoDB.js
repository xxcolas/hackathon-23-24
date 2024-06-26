import mongoose from "mongoose"

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } }

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_URI, clientOptions)
    await mongoose.connection.db.admin().command({ ping: 1 })
    console.log("Pinged your deployment. You successfully connected to MongoDB!")
  } catch (e) {
    console.dir(e)
  }
}

export default connectDB