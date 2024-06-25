import express from 'express'
import cors from "cors"
import runDB from './config/mongoDB.js'
import dotenv from "dotenv"
import initRouter from './routes/index.js'

const app = express()

dotenv.config({ path: ".env.local", override: true });

const PORT = process.env.PORT_BACK || 3000
const HOSTNAME = process.env.HOSTNAME_BACK || 'localhost'

app.use(cors());

runDB()

initRouter(app)

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});