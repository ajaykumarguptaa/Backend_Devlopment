import express from 'express'

const app=express()

//? MiddleWare are of three types
//* 1. global middleware
//* 2. specific route middleware
//* 3.inbuilmiddleware are most of the cases are global mmiddleware...

// create middleware //?global middleware....
function sayHiiMiddleware(req,res,next){
   console.log("haii i am MiddleWare 🙌")
   next
}
//use middleware
app.use(sayHiiMiddleware)

//! specific rout middle ware.... middle ware run as a specific routes is hitted


app.get('/',(req,res)=>{
  res.send("server is running....")
})

app.get("/users",(req,res)=>{
  res.send("UserPage")
})





app.listen(3000,()=>{
  console.log(`http://localhost:${3000}`)
})