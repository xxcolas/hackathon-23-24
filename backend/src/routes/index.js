import { authentication } from "../controllers/authController.js"
import { getUser, updateUser } from "../controllers/userController.js";

const initRouter = (app, upload) => {
  app.post('/auth', authentication)

  app.get('/users/:id', getUser)
  app.patch('/users/:id', upload.single('file'), updateUser)
};

export default initRouter;
