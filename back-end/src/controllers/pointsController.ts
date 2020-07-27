import { Request, Response } from 'express';
const knex = require("../database/db.ts"); // importing the db config

class pointsController {
  async index(request: Request, response: Response) {
    const { city, uf, items } = request.query;
    const parsedItems = String(items)
      .split(',')
      .map(item => Number(item.trim()));

    const points = await knex('points')
      .join('point_items', 'points.id', '=', 'point_items.point_id')
      .whereIn('point_items.item_id', parsedItems)
      .where('city', String(city))
      .where('uf', String(uf))
      .distinct()
      .select('points.*');

    const serializedPoints = points.map( (point: any) => {
      return {
        ...point,
        image_url: `http://192.168.1.105:3333/uploads/${point.image}`,
      }
    });

    return response.json(serializedPoints);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;
    const point = await knex('points').where('id', id).first();
    if (!point) {
      return response.status(400).json({ message: 'Point not found. ' });
    }

    const serializedPoint = {
      ...point,
      image_url: `http://192.168.1.105:3333/uploads/${point.image}`,
    };

    const items = await knex('items')
      .join('point_items', 'items.id', '=', 'point_items.item_id')
      .where('point_items.point_id', id)
      .select('items.title');
    return response.json({ point: serializedPoint, items });

  }

  async create(req: Request, res: Response){
    const {
      name,
      email,
      whatsapp,
      longitude,
      latitude,
      city,
      uf,
      items
    } = req.body;
    const point= {
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
      name,
      email,
      whatsapp,
      city,
      uf,
      longitude,
      latitude,
    }
    const trx= await knex.transaction();
  
    const insertID = await  trx('points').insert(point).returning('*');
    const pointItems = items.map((item_id:any)=>{
      return {
        item_id,
        point_id: insertID[0].id,
      }
    })
    await trx('point_items').insert(pointItems)
    await trx.commit();
    return res.json({
      id: insertID[0].id,
      ...point
    });
  }
}
 
const PointsController = new pointsController();
export default PointsController;