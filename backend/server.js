import express from "express"

const app = express();

app.get("/", (req, resp) => {
    resp.json("hello")
})

app.listen(3000, () => {
    console.log(`Server Running at port 3000`)
})