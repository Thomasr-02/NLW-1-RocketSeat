// Update with your config settings.
import path from "path";

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: '0.0.0.0',
      user: 'postgres',
      password: '12345678',
      database: 'postgres'
    }
  },

  staging: {
    client: 'pg',
    connection: {
      host: '0.0.0.0',
      user: 'postgres',
      password: '12345678',
      database: 'postgres'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: path.resolve(__dirname, 'src', 'database', 'migrations')
    }
  },
  production: {
    client: 'pg',
    connection: {
      host: '0.0.0.0',
      user: 'postgres',
      password: '12345678',
      database: 'postgres'
    },
    migrations: {
      directory:  path.resolve(__dirname, 'src', 'database', 'seeds'),
    },
    seeds: { directory:  path.resolve(__dirname, 'src', 'database', 'seeds') },
  }
}