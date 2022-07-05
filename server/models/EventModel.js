import mongoose from "mongoose";

const ShoesSchema = mongoose.Schema({
    shoes_name: {
        type:String,
        require:true
    },
    shoes_description: {
        type:String,
        require:true
    },
    shoes_image: {
        type:String,
        require:false
    },
    starting_price: {
        type:Number,
        require:true,
        default: 0
    }
    
})

const EventSchema = mongoose.Schema({

    description:{
        type: String,
        require: false
    },
    shoes: {
        shoes_name: {
        type:String,
        require:true
        },
        shoes_description: {
            type:String,
            require:true
        },
        shoes_image: {
            type:String,
            require:false
        },
        starting_price: {
            type:Number,
            require:true,
            default: 0
        }
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