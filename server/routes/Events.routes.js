import express from "express";
import asyncHandler from "express-async-handler";
import Event from './../models/EventModel.js';

const eventsRoute = express.Router();

// INSERT BRUT DATA
// eventsRoute.post("/", asyncHandler(async (req, res) => {
//     await Event.remove({});
//     const eventsRes = await Event.insertMany(events);
//     res.json({eventsRes});
// }));


// GET ALL EVENTS
eventsRoute.get("/",asyncHandler(async(req, res) => {
    const events = await Event.find({});
    res.json(events);
}));

// GET ONE EVENT
eventsRoute.get("/:id", asyncHandler(async(req, res) => {
    const event = await Event.findOne({_id: req.params.id});
    if (event) {
        res.json(event);
    } else {
        res.status(404);
        throw new Error("Event not found !");
    }
}));

// INSERT ONE EVENT
eventsRoute.post("/", asyncHandler(async(req,res) =>{
    const { shoes_id, ticket_price, nb_ticket, starting_date, drawing_date } = req.body;

    const event = await Event.create({
        
    });

    if(event){
        res.status(201).json({
            _id: event.id,
            
        })
    }
    else {
        res.status(400);
        throw new Error("Invalid Data");
    }

}));

export default eventsRoute;