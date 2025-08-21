import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    resume: { type: String },
    image: { type: String, required: true },
    // password: {type:String, required: true},
    // isAdmin: {type:Boolean, required: true,default: false},
})

const User = mongoose.model('User', userSchema)
export default User;