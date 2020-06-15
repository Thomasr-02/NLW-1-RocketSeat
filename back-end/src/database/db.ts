const knexfile = require('../../knexfile');
const env = 'development';
const knex = require('knex')(knexfile[env]);

module.exports = knex ;