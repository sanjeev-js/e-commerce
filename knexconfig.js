module.exports = {
    development: {
      client: 'mysql',
      connection: {
        host: 'localhost',
        user: 'root',
        password: 'pass123',
        database: 'e_commerce'
      },
      pool: {
        min: 2,
        max: 10
      }
    },

    production: {
      client: 'postgresql',
      connection: {
        database: 'example'
      },
      pool: {
        min: 2,
        max: 10
      }
    }
  };
