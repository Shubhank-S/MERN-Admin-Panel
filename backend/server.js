import express from "express"
import UserRoute from "./routes/UserRoutes.js"

// Rest Object

const app = express();

app.use('/api/v1/user', UserRoute)

app.listen(3001, () => {
    console.log(`Server Running at port 3001`)
})