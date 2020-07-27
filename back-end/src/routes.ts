import express from "express";
import itemsController from './controllers/itemsController'
import PointsController from "./controllers/pointsController";
const routes = express.Router();

routes.get("/items", itemsController.index);

routes.post("/points", PointsController.create);
routes.get("/points/:id", PointsController.show);
routes.get("/points", PointsController.index);


export default routes;