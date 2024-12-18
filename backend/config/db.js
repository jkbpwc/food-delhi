import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('donotconnect').then(()=>console.log('Connected to MongoDB'));
}