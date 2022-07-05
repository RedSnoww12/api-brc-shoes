import express from "express";
import asyncHandler from "express-async-handler";
import Event from './../models/EventModel.js';
import events from './../data/event.js';

const eventsRoute = express.Router();

// INSERT BRUT DATA
eventsRoute.post("/", asyncHandler(async (req, res) => {
    await Event.remove({});
    const eventsRes = await Event.insertMany(events);
    res.json({eventsRes});
}));


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

/*/ INSERT ONE EVENT
eventsRoute.post("/", asyncHandler(async(req,res) =>{
    const { shoes_id, ticket_price, nb_ticket, starting_date, drawing_date } = req.body;

    // const event = await Event.create({
    //     shoes_id: shoes_id,
    //     ticket_price: ticket_price,
    //     nb_ticket: nb_ticket,
    //     starting_date: starting_date,
    //     drawing_date: drawing_date,
    // });
    await Event.remove({});
    const event = await Event.insertMany(events);

    if(event){
        res.status(201).json({
            _id: event.id,
            shoes: event.shoes,
            ticket_price: event.ticket_price,
            nb_ticket: event.nb_ticket,
            starting_date: event.starting_date,
            drawing_date: event.drawing_date,
        })
    }
    else {
        res.status(400);
        throw new Error("Invalid Data");
    }

}));*/

export default eventsRoute;