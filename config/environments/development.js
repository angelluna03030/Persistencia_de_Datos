require('dotenv').config(); // Cargar las variables de entorno desde .env

module.exports = {
  PORT: process.env.PORT,
  DB: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: process.env.DB_LOGGING === 'true' ? true : false
  }
};
