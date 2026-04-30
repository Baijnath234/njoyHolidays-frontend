const mongoose = require("mongoose");

const testConnection = async () => {
  try {
    const mongoUri =
      process.env.MONGO_URI || "mongodb://127.0.0.1:27017/njoyholidayz";

    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`MongoDB connected: ${mongoose.connection.name}`);
  } catch (error) {
    throw new Error(
      `MongoDB connection failed. Check MONGO_URI in backend/.env. ${error.message}`,
    );
  }
};

module.exports = {
  testConnection,
};
