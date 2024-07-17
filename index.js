const http = require("http")  
const fs = require("fs")
const url = require("url")

const myServer = http.createServer((req,res)=>{ 
    if(req.url === '/favicon.ico'){ return res.end()}  // to avoid this entry in the log
   const log = `${Date.now()} ${req.url} New Request Received\n`
   const myUrl = url.parse(req.url)
   console.log(myUrl);
//NON_BLOCKING   
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(req.url){ 
            case '/' : res.end("HomePage");
            break;
            case '/about': res.end("I am Shivank Jain The Best MERN STACK CODER");
            break;
            default:  res.end("404 Not Found")
        }
            
    })  
})


myServer.listen(8000,()=>{console.log("Server Has Started")})