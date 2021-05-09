const express = require('express');
const fs = require('fs')

const app = express()

app.use(express.json())


const html = fs.readFileSync("index.html","utf-8")

let data = JSON.parse(fs.readFileSync("data.json", "utf-8"))


app.get("/",(req,res)=>{

    res.end(html)
})
app.get("/:player",(req,res)=>{
    
    let id = req.params.player
    const players = data.filter((el)=> el.from===id)
    
    res.json(players)
    
})
app.post("/players",(req,res)=>{
    data.push(req.body)
    data = JSON.stringify(data)
    fs.writeFile("data.json", data, ()=>{
        res.end('You updated the data')
    })
})
app.get("/homepage",(req,res)=>{
    res.end("Homepage")
})
app.get("/cricketPage",(req,res)=>{
    res.end("Cricket Page")
})


app.listen(5000, ()=>{
    console.log('server is listening at port 5000')
})