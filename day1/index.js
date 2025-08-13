import http from 'http'
import fs from "fs"
// import { log } from 'console'


const PORT=8080
const server=http.createServer((req,res)=>{
    //*  res.end("hello how are you...")
    // console.log(req)
     const Log=`${Date.now()}: New Request Received come from ${req.url}\n`
    fs.appendFile("log.txt",Log,(err)=>{
     if(err){
      console.log("Error writing to the log file",err);
      res.statusCode=500;
      res.end("Internal Server error")
      return;
     }
     console.log("Hello from Server")
    })


})

server.listen(PORT,(req,res)=>{
  console.log(`server is connected http://localhost:${PORT}`)
})

//TODO: Aclass on status code