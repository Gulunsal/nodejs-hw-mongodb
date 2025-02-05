const mongoose = require('mongoose');
const pino = require('pino')();

const initMongoConnection = async () => {
  try {
    const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_URL, MONGODB_DB } = process.env;
    
    if (!MONGODB_USER || !MONGODB_PASSWORD || !MONGODB_URL || !MONGODB_DB) {
      throw new Error('MongoDB bağlantı bilgileri eksik!');
    }

    const connectionString = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_URL}/${MONGODB_DB}?retryWrites=true&w=majority`;
    
    await mongoose.connect(connectionString);
    
    pino.info('Mongo connection successfully established!');
  } catch (error) {
    pino.error('MongoDB connection error:', error);
    throw error; // Hatayı yukarı fırlat
  }
};

module.exports = { initMongoConnection };
