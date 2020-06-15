import { Request, Response } from 'express';
const knex = require("./database/db.ts"); // importing the db config

class PointsController {
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

  
  
}

export default PointsController;