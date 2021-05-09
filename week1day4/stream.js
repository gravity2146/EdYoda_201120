const http = require('http')

const fs = require('fs')

const readByChunk = fs.createReadStream("data.txt");
let requestData;
const server = http.createServer((req,res)=>{
    console.log('got a request')
    req.on("data",(data)=>{
        requestData = data
    })
    req.on("end",()=>{
        console.log(String(requestData))
    })

    
})

server.listen(3000, "127.0.0.1",()=>{
    console.log("server is listening at port 3000")
})