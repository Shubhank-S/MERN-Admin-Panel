import express from "express"
import dotenv from 'dotenv'
import connectDB from "./database/db.js";
import cors from 'cors'
import UserRoute from "./routes/UserRoutes.js"

// Rest Object

const app = express();

// Middlewares

app.use(express.json())
app.use(cors())

// Routes

app.use('/api/v1/user', UserRoute)

// dotenv configuration

dotenv.config()

// Database configuration

connectDB();

// PORT

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server Running at port ${PORT}`)
})