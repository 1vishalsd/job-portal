import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB is connected SuccessFully");
  } catch (error) {
    console.log(`Error occupid in db connection ${error}`);
  }
};

export default connectDB;
