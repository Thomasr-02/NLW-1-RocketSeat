// Update with your config settings.
import path from "path";

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: '0.0.0.0',
      port: '5432',
      user: 'postgres',
      password: '12345678',
      database: 'postgres'
    }
  },

  
  migrations: {
    tableName: path.resolve(__dirname, 'src', 'database', 'migrations')
  }

}