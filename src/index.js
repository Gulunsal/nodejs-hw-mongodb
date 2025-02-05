require('dotenv').config();
const { initMongoConnection } = require('./db/initMongoConnection');
const { setupServer } = require('./server');

const startApplication = async () => {
  try {
    await initMongoConnection();
    setupServer();
  } catch (error) {
    console.error('Failed to start application:', error);
    process.exit(1);
  }
};

startApplication();
