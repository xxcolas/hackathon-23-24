import gptController from "../controllers/gptController.js";

const initRouter = (app) => {
  app.get("/summarize", gptController);
  app.get("/", (req, res) => {
    return res.status(200).json({ message: "Hello World from backend!" });
  });
};

export default initRouter;
