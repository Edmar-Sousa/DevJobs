// Update with your config settings.

import path from 'path'

export default {

  development: {
    client: "sqlite3",
    connection: {
      filename : path.resolve('src', 'database', 'dev.sqlite3')
    },

    migrations : {
      directory : path.resolve('src', 'database', 'migrations')
    },

    seeds : {
      directory : path.resolve('src', 'database', 'seeds')
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};
