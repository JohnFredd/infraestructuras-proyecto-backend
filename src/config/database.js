// config/database.js
const Sequelize = require('sequelize');
const logger = require('./logger');

const sequelize = new Sequelize('Gestor-de-proyectos', 'Admin', '12345', {
  host: 'localhost',
  dialect: 'postgres',
  logging: (msg) => logger.info(msg),
});

module.exports = sequelize