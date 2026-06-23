import express from 'express';
import dotenv from "dotenv"
dotenv.config()
import db from "./utils/db.js"

import cors from "cors"

import dns from "dns"
dns.setServers([
  '1.1.1.1',
  '8.8.8.8'
])

const app = express()
const port = process.env.PORT || 3000

app.use(cors({
  origin: process.env.BASE_URL,
  credentials: true,
  methods: ['GET','POST', 'DELETE','OPTIONS'], // not case-sensitive
  allowedHeaders: ['Content-Type', 'Authorization'] // case-sensitive
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
  res.send('Cohort')
})

// connect to db
db()
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

