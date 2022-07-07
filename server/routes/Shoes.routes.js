import express from "express";
import asyncHandler from "express-async-handler";
import Shoes from './../models/ShoesModel.js';
import shoess from './../data/shoes.js';

const shoesRoute = express.Router();

// GET ALL SHOES
shoesRoute.get("/", asyncHandler(async(req, res) => {
    const shoes = await Shoes.find({});
    res.json(shoes);
}));

// GET ONE SHOE
shoesRoute.get("/:id", asyncHandler(async(req, res) => {
    const shoe = await Shoes.find({_id: req.params.id});
    if (shoe) {
        res.json(shoe);
    } else {
        res.status(404);
        throw new Error("Shoes not found !");
    }
}));

// POST SHOES
shoesRoute.post("/", asyncHandler(async(req,res) => {
    const { shoes_name, shoes_description, shoes_image, starting_price, event_id } = req.body;
    

    // const shoes = await Shoes.create({
    //     shoes_name: shoes_name,
    //     shoes_description: shoes_description,
    //     shoes_image: shoes_image,
    //     starting_price: starting_price,
    //     event_id: event_id,
    // });

    await Shoes.remove({});
    const shoes = await Shoes.insertMany(shoes)

    if(shoes){
        res.status(201).json({
            _id: shoes.id,
            shoes_name: shoes.shoes_name,
            shoes_description: shoes.shoes_description,
            shoes_image: shoes.shoes_image,
            starting_price: shoes.starting_price,
            event_id: shoes.event_id
        });
    }else{
        res.status(400);
        throw new Error("Invalid Data");
    }
}))

export default shoesRoute;