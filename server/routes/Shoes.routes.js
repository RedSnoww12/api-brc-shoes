import express from "express";
import asyncHandler from "express-async-handler";
import Shoes from './../models/ShoesModel.js';

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

export default shoesRoute;