const mongoose = require('mongoose');
const pino = require('pino')();

const initMongoConnection = async () => {
  try {
    const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_URL, MONGODB_DB } = process.env;
    
    if (!MONGODB_USER || !MONGODB_PASSWORD || !MONGODB_URL || !MONGODB_DB) {
      throw new Error('MongoDB bağlantı bilgileri eksik!');
    }

    const connectionString = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_URL}/${MONGODB_DB}?retryWrites=true&w=majority`;
    
    // Bağlantı hatası detaylarını görmek için
    pino.info('Trying to connect with:', {
      url: MONGODB_URL,
      db: MONGODB_DB,
      user: MONGODB_USER
    });

    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    
    pino.info('Mongo connection successfully established!');
  } catch (error) {
    pino.error('MongoDB connection error:', error.message);
    throw error;
  }
};

module.exports = { initMongoConnection };
