import mongoose from "mongoose";


export default async function dbConnect() {
  const mongoURL = process.env.MONGODB_URL;
  if (!mongoURL) {
    throw new Error("MONGODB_URL not found in environment variables");
  }

  try {
    const connection = await mongoose.connect(mongoURL);
    console.log("Connected to MongoDB");
    return connection;
  } catch (err: any) {
    console.error("Failed to connect to MongoDB", err);
    throw err.message; // Re-throw the error to be caught at a higher level if needed
  }
}
