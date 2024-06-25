import { authentication } from "../controllers/auth.js"

const initRouter = (app) => {
  app.get('/', (req, res) => {
    return res.status(200).json({ message: 'Hello World from backend!' })
  })

  app.post('/auth', authentication)
}

export default initRouter