"use strict";
//dependencia requeridas
const fs = require("fs");
const path = require("path");
//el constructor de la clase de "sequelize"
const Sequelize = require("sequelize");
//utilize path para concatenar el nombre de este archivo
const basename = path.basename(__filename);
const { DB } = require("../../config/environments");
//creamos un a nueva constante de la base de datos y a asignarla
const config = DB;
const db = {};

//cree una constante sequelize donde le llevo los parametros, para configurar la conexión a la base de datos
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
//todos los modelos que yo e creado, el me los encuentra
//todo ---> y me lo va a mepear con la base de datos, me lo devuelve en mi conexión
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    console.log(model); // Agrega esta línea para depurar
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
//todo ---> aqui estoy creando y exportando el objeto "db"
//todo ---> aunque se parescan una esta exportando "sequelize" y el otro su constructor
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
