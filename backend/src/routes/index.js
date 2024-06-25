import { authentication } from "../controllers/authController.js"
import gptController from "../controllers/gptController.js";
import { updateUser } from "../controllers/userController.js";

const initRouter = (app, upload) => {
  app.get("/summarize", gptController);
  app.get("/", (req, res) => {
    return res.status(200).json({ message: "Hello World from backend!" });
  });

  app.post('/auth', authentication)

  app.patch('/users', upload.single('file'), updateUser)
};

export default initRouter;
