import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import validator from 'validator';
import mongoose from "mongoose";
import 'dotenv/config';

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET);
}

//login user
const loginUser = async(req,res) => {
    const {email,password} = req.body;
    try{
        const user = await userModel.findOne({email});
        if(!user){
            return res.json({success:false,message:"User doesnt exist"});
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.json({success:false,message:"invalid credentials"});
        }
        const token = createToken(user._id);
        res.json({success:true,token,message:"User logged in"});
    }
    catch(error){
        console.log(error);
        return res.json({success:false,error,message:"error"});
    }
} 

//register user
const registerUser = async(req,res) =>{
    const {name,email,password} = req.body;
    try{
        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success: false, message: "user already exists"});
        }
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Invalid Email"});
        }
        if(password.length<8){
            return res.json({success:false,message:"Enter a strong password"});
        }
        const salt = await bcrypt.genSalt(9);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword,
        });

        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({success:true,token,message:"User Created"});
    }
    catch(error){
        res.json({success:false,message: "Error"});
    }
}

export {loginUser,registerUser};