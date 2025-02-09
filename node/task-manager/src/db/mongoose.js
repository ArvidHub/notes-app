import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB successfully!");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });
