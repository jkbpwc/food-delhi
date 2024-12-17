import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://jyotikrishnabehera11:67891234@cluster0.nck7b.mongodb.net/fooddelhi').then(()=>console.log('Connected to MongoDB'));
}