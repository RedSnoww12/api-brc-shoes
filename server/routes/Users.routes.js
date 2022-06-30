import express from "express";
import asyncHandler from "express-async-handler";
import User from './../models/UserModel.js';
import generateToken from './../utils/generateToken.js';
import protect from './../Middleware/AuthMiddleware.js';

const userRoute = express.Router();

// GET ALL USERS 
userRoute.get("/", asyncHandler(async(req, res) => {
    const users = await User.find({});
    res.json(users);
}));

// GET ONE USER
// userRoute.get("/:id", asyncHandler(async(req, res) => {
//     const user = await User.find({_id: req.params.id});
//     if (user) {
//         res.json(user);
//     } else {
//         res.status(404);
//         throw new Error("User not found !");
//     }
// }));

// LOGIN 
userRoute.post("/login", asyncHandler(async(req,res) =>{
    const { email, password } = req.body;
    const user = await User.findOne({mail: email});
    
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            last_name: user.last_name,
            first_name: user.first_name,
            nickname: user.nickname,
            phone: user.phone,
            adress: user.adress,
            mail: user.mail,
            password: user.password,
            isAdmin: user.isAdmin,
            token: generateToken(user.id),
            createAt: user.createAt
        })
    }
    else{
        res.status(401)
        throw new Error("Invalid Email or Password");
    }

}));

// PROFILE 
userRoute.get("/profile", protect, asyncHandler(async(req,res) =>{
    
    const user = await User.findById(req.user._id)

    if (user) {
        res.json({
            _id: user._id,
            last_name: user.last_name,
            first_name: user.first_name,
            nickname: user.nickname,
            phone: user.phone,
            adress: user.adress,
            mail: user.mail,
            password: user.password,
            isAdmin: user.isAdmin,
            createAt: user.createAt
        })
    } else {
        res.status(404)
        throw new Error("User not found");
    }

}));

export default userRoute;