import { authentication } from "../controllers/authController.js"
import gptController from "../controllers/gptController.js";
import { getUser, updateUser } from "../controllers/userController.js";

const initRouter = (app, upload) => {
  app.get("/summarize", gptController);
  app.get("/", (req, res) => {
    return res.status(200).json({ message: "Hello World from backend!" });
  });

  app.post('/auth', authentication)

  app.get('/users/:id', getUser)
  app.patch('/users/:id', upload.single('file'), updateUser)
};

export default initRouter;
