// config/database.js
const Sequelize = require('sequelize');

const sequelize = new Sequelize('Gestor-de-proyectos', 'Admin', '12345', {
  host: 'localhost',
  dialect: 'postgres', // o 'mysql', 'sqlite', 'mssql'
});

module.exports = sequelize