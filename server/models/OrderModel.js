import mongoose from "mongoose";

const OrderSchema = mongoose.Schema({

},
{
    timestamps:true
});

const Order = mongoose.model("Order", OrderSchema);

export default Order;