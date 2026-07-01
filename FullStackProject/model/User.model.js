import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    resetToken: String
},{
    Timestamp: true,
})

const User = mongoose.model("User", userSchema)

export default User
