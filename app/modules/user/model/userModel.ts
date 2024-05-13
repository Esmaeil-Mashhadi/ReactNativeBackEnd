import mongoose, { model, models } from "mongoose";

const userSchema = new mongoose.Schema({
    email:{type:String} , 
    password:{type:String},
    role:{type:String , default:"user"}
})

const userModel = models?.user || model('user' , userSchema)

export default userModel