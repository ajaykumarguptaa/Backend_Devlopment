import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// handle ES module_dirname and_filename

const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)

//* Middleware to log all request....

const LogMiddleware=(req,res,next)=>{
  const log=`[${new Date().toISOString()}] ${req.method} ${req.url}\n`
  const logfile=path.join(__dirname,"../logs/request.log");

  fs.appendFile(logfile,log,(err)=>{
    if(err){
      console.log("Failed to Log request: ",err)
    }
  });
  next()
}
export default LogMiddleware;