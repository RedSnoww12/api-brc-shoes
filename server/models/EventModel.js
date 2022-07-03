import mongoose from "mongoose";

const EventSchema = mongoose.Schema({

    shoes_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Shoes',
        require:true,
        unique:true
    },
    ticket_price:{
        type: Number,
        require:true
    },
    nb_ticket:{
        type:Number,
        require: true
    },
    starting_date:{
        type: Date,
        require:true
    },
    drawing_date:{
        type: Date,
        require:true
    },
    participants:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Users'
    },{default:[]}],
    winner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users',
        default:null
    }

},
{
    timestamps:true
}
);

const Event = mongoose.model("Event", EventSchema);

export default Event;