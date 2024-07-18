
const express = require("express")

const app = express()  // Create a App

app.get("/", (req,res)=>{
   return res.send("Hello From Home Page")
})

app.get("/about", (req,res)=>{ 
   return res.send(`Hello ${req.query.name}`)
})

app.listen(8000,()=> console.log('Server Started !'))






/// NodeJS Way

// const http = require("http")  
// const fs = require("fs")
// const url = require("url")


// function myHandler(req,res){
//     if(req.url === '/favicon.ico'){ return res.end()}  // to avoid this entry in the log
//     const log = `${Date.now()} ${req.method} ${req.url} New Request Received\n`
//     const myUrl = url.parse(req.url,true)
//     console.log(myUrl);
//  //NON_BLOCKING   
//      fs.appendFile("log.txt",log,(err,data)=>{
//          switch(myUrl.pathname){ 
//              case '/' : res.end("HomePage");
//              break;
//              case '/about': 
//                const username = myUrl.query.myname
//              res.end(`Hi, ${username}`);
//              break;
//              default:  res.end("404 Not Found")
//          }
             
//      }) 
// }

// const myServer = http.createServer(app)


// myServer.listen(8000,()=>{console.log("Server Has Started")})