const express = require('express');
const cors = require('cors');
const pino = require('pino')();
const contactRoutes = require('./routes/contactRoutes');

const setupServer = () => {
  const app = express();
  
  // Middleware
  app.use(cors());
  app.use(express.json());
  
  // Logger
  app.use((req, res, next) => {
    pino.info(`${req.method} ${req.url}`);
    next();
  });

  // Routes
  app.use('/contacts', contactRoutes);

  // 404 handler
  app.use((req, res) => {
    res.status(404).json({
      message: 'Not found'
    });
  });

  const PORT = process.env.PORT || 3000;
  
  app.listen(PORT, () => {
    pino.info(`Server is running on port ${PORT}`);
  });

  return app;
};

module.exports = { setupServer };
