const express = require('express')

const app = express()
app.use(express.json())

let path = __dirname
path = path +"/views"

app.use(express.static(path))

app.set("view engine","ejs")


app.get('/Admin',isAdmin,(req,res)=>{
    res.end("Admin Page")
})
app.get("/AdminMain",(req,res)=>{
    res.end("AdminMain Page")
})


app.get("/Home",(req,res)=>{
    res.render("index",{
        name: "Himanshu",
        team:"Mumbai Indians",
        image:"https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg"
    })
})



function isAdmin(req,res,next){

    let body = req.body
    console.log(body)
    if(body.id === "12345"){
        next()
    }
    else{
        res.end("You don't have permission")
    }
   
   
}



app.listen(4000)