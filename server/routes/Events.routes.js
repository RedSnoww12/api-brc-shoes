import express from "express";
import asyncHandler from "express-async-handler";
import Event from './../models/EventModel.js';
import events from './../data/event.js';

const eventsRoute = express.Router();

// INSERT BRUT DATA
// eventsRoute.post("/", async (req, res) => {
//     await Event.remove({});
//     const eventsRes = await Event.insertMany(events);
//     res.json({eventsRes});
// });


// GET ALL EVENTS
eventsRoute.get("/",asyncHandler(async(req, res) => {
    const events = await Event.find({});
    res.json(events);
}));

// GET ONE EVENT
eventsRoute.get("/:id", asyncHandler(async(req, res) => {
    const event = await Event.find({_id: req.params.id});
    if (event) {
        res.json(event);
    } else {
        res.status(404);
        throw new Error("Event not found !");
    }
}));

export default eventsRoute;