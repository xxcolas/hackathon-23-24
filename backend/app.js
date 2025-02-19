import express from 'express'
import cors from "cors"
import connectDB from './src/config/mongoDB.js'
import dotenv from "dotenv"
import initRouter from './src/routes/index.js'
import multer from 'multer'

const app = express()
const upload = multer({ dest: "public/uploads/" });

dotenv.config({ path: ".env.local", override: true });

const PORT = process.env.PORT_BACK || 3000
const HOSTNAME = process.env.HOSTNAME_BACK || 'localhost'

app.use(cors());
app.use(express.json())
app.use(express.urlencoded())

connectDB()

initRouter(app, upload)

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});