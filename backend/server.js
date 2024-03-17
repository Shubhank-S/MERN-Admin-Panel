import express from "express"
import dotenv from 'dotenv'
import UserRoute from "./routes/UserRoutes.js"

// Rest Object

const app = express();

// Routes

app.use('/api/v1/user', UserRoute)

// Configure dotenv

dotenv.config()

// PORT

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server Running at port ${PORT}`)
})