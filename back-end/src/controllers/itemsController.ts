import { Request, Response } from 'express';
const knex = require("../database/db.ts"); // importing the db config

class itemsController{
  async index(req: Request,res: Response)
  {
    try {
      const items = await knex('items').select('*');
      Object.values(items)
      const serializeItems = items.map((item: any) => {
        return {
          id: item.id,
          title: item.title,
          image_url: `http://localhost:8080/assets/${item.image}`
        }
      })
      res.json(serializeItems);
    } catch (e) { console.log(e) }
  }
}


const itemController = new itemsController();
export default itemController;