const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const logger = require('./config/logger');

const app = express();
const port = 3000;

const corsOptions = {
    origin: 'http://localhost:5000',
    optionsSuccessStatus: 200,
  };


app.use(cors(corsOptions));
app.use(express.json());

// Routes
const projectRoutes = require('./routes/projectRoutes');
const taskRoutes = require('./routes/taskRoutes');

app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

app.listen(port, () => {
  logger.info(`Server running on http://localhost:${port}`);
  console.log(`Server running on http://localhost:${port}`);
});
