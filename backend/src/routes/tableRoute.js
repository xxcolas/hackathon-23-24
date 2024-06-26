import {getAllClient} from "../controllers/clientController.js";

const tableRoute = (app) => {
  app.get("/client", getAllClient);
  };

export default tableRoute;
