const express = require('express')
const fs = require('fs')
const mongoose = require("mongoose")


const app = express()



let dbUrl = "mongodb+srv://Admin:1234@test.qejjt.mongodb.net/demo?retryWrites=true&w=majority"

mongoose.connect(dbUrl, {
     useUnifiedTopology: true,
     useNewUrlParser: true
})

const db = mongoose.connection;

db.on("error",(err)=>console.log(err))

db.once("open", ()=> console.log("Databse connected"))


const playerSchema = new mongoose.Schema({})

const user = mongoose.model("user", playerSchema)

const html = fs.readFileSync("index.html",'utf-8')
let data = fs.readFileSync("data.json","utf-8")
data = JSON.parse(data)


app.get("/home",(req,res)=>{
     res.end(html)
})
let path = __dirname
path = path + "/views"
app.use(express.static(path))
app.set("view engine","ejs")

app.get("/info", async (req,res)=>{
     try{

     let players = await user.find();
     console.log(players)
     res.json(players)

     }catch (err) {
          res.json({ Message: err.message })
     }   
})

app.listen(2000,()=>{
    console.log('server is runnig')
})
