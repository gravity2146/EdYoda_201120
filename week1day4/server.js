const http = require('http')

const fs = require('fs')


//const html = fs.readFileSync('index.html','utf-8')

const server = http.createServer((req, res)=>{
    const pathName = req.url

    if (pathName === "/home"){
    fs.readFile('index.html','utf-8',(err, data)=>{
        res.writeHead(200, {'content-type':'text/html'})
        res.end(data)
    })
    }
    else if (pathName === "/dashboard")
    {
        res.end('DashBoard')
    }
    else{
        res.writeHead(404)
        res.end("page not found")
    }
})

server.listen(5000, "127.0.0.1",()=>{
    console.log('our server is listening now at port 5000')
})