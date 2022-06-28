import mongoose from "mongoose";

const EventSchema = mongoose.Schema({

});

const Event = mongoose.model("Event", EventSchema);

export default Event;