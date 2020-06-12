import Knex from "knex";
export async function up(knex: Knex) {
  // create table
}
exports.up = (knex : Knex) =>
knex.schema.createTable('items', table => {
  table.increments('id').primary();
  table.string('image').notNullable();
  table.string('title').notNullable();
})

exports.down = (knex : Knex) => knex.schema.dropTableIfExists("items");