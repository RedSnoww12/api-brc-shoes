import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({
    last_name: {
        type:String,
        require:true
    },
    first_name: {
        type:String,
        require:true
    },
    nickname: {
        type:String,
        require:true,
        unique: true
    },
    phone: {
        type:String,
        require:false
    },
    adress: {
        type:String,
        require:true
    },
    mail: {
        type:String,
        require:true,
        unique:true
    },
    password: {
        type:String,
        require:true
    },
    isAdmin:{
        type:Boolean,
        require:true,
        default: false
    }
    
}, 
{
    timestamps:true
})

// REGISTER
userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next()
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

userSchema.methods.matchPassword = async function (inputPassword){
    return await bcrypt.compare(inputPassword, this.password);
}

const User = mongoose.model("User", userSchema);

export default User;