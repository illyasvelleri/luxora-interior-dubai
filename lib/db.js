//lib/db.js
import mongoose from 'mongoose';

let isConnected = false;

export default async function connectDB() {
  if (mongoose.connection.readyState === 1) return;

  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI missing");
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 30000,
      connectTimeoutMS: 30000,
      socketTimeoutMS: 45000,
      maxPoolSize: 10,
      minPoolSize: 2,
    });

    isConnected = true;

  } catch (error) {
    console.error("MongoDB Error:", error.message);
    throw error;
  }
}
