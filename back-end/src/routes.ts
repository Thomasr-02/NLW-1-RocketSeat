import express, { json } from "express";
const knex = require("./database/db.ts"); // importing the db config
import itemsController from './controllers/itemsController'
const routes = express.Router();

routes.get("/items", async (req,res) => {
  try{
    const items = await knex('items').select('*');
    Object.values(items)
    const serializeItems = items.map( (item:any)=>{
      return {
        title: item.title,
        image_url: `http://localhost:8080/assets/${item.image}`
      } 
    })
    res.json(serializeItems);
  }catch(e){console.log(e)}
})

export default routes;