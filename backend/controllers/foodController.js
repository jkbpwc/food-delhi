import foodModel from "../models/foodModel.js";
import fs from 'fs';

const addFood = async (req, res) => {
    let image_filename = `${req.file.filename}`;
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename,
    })
    try{
        await food.save();
        res.json({success:true, message:"food Added Successfully"});
    }
    catch(error){
        res.json({success:false, message:error.message});
    }
};

export { addFood };