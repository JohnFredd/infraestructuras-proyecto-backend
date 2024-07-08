const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Gestor-de-proyectos', 'Admin', '12345', {
  host: 'localhost',
  dialect: 'postgres'
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
