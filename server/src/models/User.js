import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true, 
    },
    field:{
        type : String,
        required : true,
    },
    city:{
        type : String,
        required : true,
    },
    emailid:{
        type : String,
        required : true,
    }
},{timestamps: true})
export default mongoose.model("User",userSchema);