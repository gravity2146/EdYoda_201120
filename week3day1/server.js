const express = require("express")
const mongoose = require("mongoose")
const userRouter = require("./routes/users")

const app = express()

let dbUrl = "mongodb+srv://Admin:1234@test.qejjt.mongodb.net/demo?retryWrites=true&w=majority"

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection

db.on("error", (error)=>console.log(error))

db.once("open", ()=> console.log("Connected to Dabase"))


app.use(express.json())

// Doing operation
app.use( "/cricket", userRouter);




app.listen(3000, ()=>{
    console.log('server is listening at port 4000')
})