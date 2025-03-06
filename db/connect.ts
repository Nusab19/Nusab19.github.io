import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("MONGO_URI is not defined");
}

// Maintain a global cache to avoid reconnecting in a hot-reload scenario
declare global {
  var mongooseConnection: Promise<typeof mongoose> | undefined;
}

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    // Already connected
    return;
  }

  if (!global.mongooseConnection) {
    global.mongooseConnection = mongoose.connect(MONGO_URI, { dbName: "prod" });
    console.log("Connected to MongoDB: prod");
  }

  await global.mongooseConnection;
};

export default connectDB;
