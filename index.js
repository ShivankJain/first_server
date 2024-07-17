const http = require("http")  

const myServer = http.createServer((req,res)=>{ 
   console.log("We Have Recieved A Request")
   res.end("Hello From The Server")
})
