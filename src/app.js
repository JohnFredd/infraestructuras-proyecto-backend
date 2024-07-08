const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');

const app = express();
const port = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const projectRoutes = require('./routes/projectRoutes');
const taskRoutes = require('./routes/taskRoutes');

app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  
  sequelize.sync({ force: false })
    .then(() => {
      console.log('Database synced');
    })
    .catch(err => {
      console.error('Error syncing database:', err);
    });
});
