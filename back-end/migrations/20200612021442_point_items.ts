import Knex from "knex";
export async function up(knex: Knex) {
  // create table
}
exports.up = (knex : Knex) =>
knex.schema.createTable('point_items', table => {
  table.increments('id').primary();
  table.integer('point_id').references('id').inTable('points');
  table.integer('item_id').references('id').inTable('items');
})

exports.down = (knex : Knex) => knex.schema.dropTableIfExists("point_items");