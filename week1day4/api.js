const http = require('http')

const fs = require('fs')

const apiData = fs.readFileSync("data.json",'utf-8')

let Data = JSON.parse(apiData)

console.log(Data)

const server = http.createServer((req,res)=>{
    const pathName = req.url
    let data = []

    if (pathName === "/cricket-124"){
        req.on("data", (line)=>{
            data.push(line)
        })
        req.on("end",()=>{
            
            data = JSON.parse(data)

            Data.push(data)
            
            const d = JSON.stringify(Data)

            fs.writeFile("data.json", d ,(err)=>{
                console.log(err)
            })
            
        })
    }
    
    res.end("you uploaded the data successfully")

})

server.listen(3000,"127.0.0.1")