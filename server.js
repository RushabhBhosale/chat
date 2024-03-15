import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const connectDb = async () => {
   try {
      await mongoose.connect(process.env.MONGODB_URI || "");
      console.log("Connection Successful");
   } catch (error) {
      console.error("Connection Failed", error);
      throw error;
   }
};

connectDb()
   .then(() => {
      console.log("Connection established successfully!");
   })
   .catch((error) => {
      console.error("Failed to establish connection:", error);
   });
