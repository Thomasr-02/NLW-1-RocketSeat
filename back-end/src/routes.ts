import express, { json } from "express";
const knex = require("./database/db.ts"); // importing the db config
import itemsController from './controllers/itemsController'
import PointsController from "./controllers/pointsController";
const routes = express.Router();

routes.get("/items", itemsController.showItems);

routes.post("/points", PointsController.createPoints);

export default routes;