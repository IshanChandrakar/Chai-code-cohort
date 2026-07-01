import mongoose from "mongoose";
import dotenv from "dotenv/config"
import dns from "dns"

dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])

const db = ()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("connected to mongodb");
        
    })
    .catch((err)=>{
        console.log(err);
    })
}

export default db
