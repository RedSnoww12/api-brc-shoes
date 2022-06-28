import express from "express";
import asyncHandler from "express-async-handler";
import User from './../models/UserModel.js';

const userRoute = express.Router();

// GET ALL USERS 
userRoute.get("/", asyncHandler(async(req, res) => {
    const users = await User.find({});
    res.json(users);
}));

// GET ONE SHOE
userRoute.get("/:id", asyncHandler(async(req, res) => {
    const user = await User.find({_id: req.params.id});
    if (user) {
        res.json(user);
    } else {
        res.status(404);
        throw new Error("User not found !");
    }
}));

// LOGIN 
userRoute.post("/login", asyncHandler(async(req,res) =>{
    const { email, password } = req.body;
    const user = await User.findOne({email});
    
    if (user && (await user.matchPassword(password))) {
        res.json(user)
    }
    else{
        res.status(401)
        throw new Error("Invalid Email or Password");
    }

}));

export default userRoute;