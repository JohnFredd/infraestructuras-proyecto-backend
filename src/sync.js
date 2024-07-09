const sequelize = require('./config/database');
const logger = require('./logger');

sequelize.sync({ force: false })
  .then(() => {
    logger.info('Database synced successfully');
    console.log('Database synced successfully');
  })
  .catch(err => {
    logger.error('Error syncing database: ' + err.message);
    console.error('Error syncing database:', err);
  });
