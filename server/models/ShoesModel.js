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
    
}, 
{
    timestamps:true
})

const Shoes = mongoose.model("Shoes", ShoesSchema);

export default Shoes;