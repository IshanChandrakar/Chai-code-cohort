import express from "express"
import dotenv from "dotenv/config"
import cors from "cors"
import db from "./utils/db.js"

// importing routes
import userRoutes from "./routes/user.route.js"

const app = express()
const port = process.env.PORT || 3000

app.use(cors({
  origin: process.env.BASE_URL,
   credentials: true,
  methods: ['GET','POST', 'DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
  res.send('Cohort!')
})

app.get('/ishan',(req, res)=>{
    res.send("ishan chandrakar!")
})

// connect to db
db()

// user routes

app.use("/api/v1/users",userRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

console.log(process.env.PORT);
