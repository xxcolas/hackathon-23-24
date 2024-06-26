import {
  getAllClient,
  addMessageClient,
} from "../controllers/clientController.js";

const tableRoute = (app) => {
  app.get("/client", getAllClient);
  app.post("/client/:id", addMessageClient);
};

export default tableRoute;
