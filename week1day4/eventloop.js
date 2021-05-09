const fs = require('fs')

console.log(1)

setTimeout(()=> console.log("timeout 0"),0)

fs.readFile('data.text','utf-8',()=>{
    
    console.log("I/o finished")

    setTimeout(() => console.log("timeout 1"),3000)

})
setTimeout(()=> console.log("timeout 2"),2000)

console.log(3)
// timeout0, filereading,timeout2