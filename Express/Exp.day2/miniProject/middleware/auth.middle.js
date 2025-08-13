import { validateToken } from "../utility/token.Util.js";

const authMiddleware=(req,res,next)=>{
     const token=req.headers['authorization'];
     if(token && validateToken(token)){
        req.user={name:"Ajay",id:1}
        next()
     }else{
      res.status(401).send("Unauthorized:invalid or missing token")
     }
     
}

export default authMiddleware;