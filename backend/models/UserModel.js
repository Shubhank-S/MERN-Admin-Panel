import mongoose from "mongoose";
import JWT from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config()

const secretKey = process.env.KEY

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    secretAnswer: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    role: {
        type: Number,
        default: 0,
    },
})

UserSchema.methods.generatetoken =function(){
    try {
        const userToken = JWT.sign({_id:this._id},secretKey)
        return userToken;
    } catch (error) {
        console.log(error)
    }
}

export default mongoose.model('users',UserSchema)