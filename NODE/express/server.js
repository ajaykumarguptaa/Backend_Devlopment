import express from 'express'

const app=express()

app.use((req,res,next)=>{
  console.log("first middle ware is running..")
  // res.send("first middle ware ")
  next();
})

app.use((req,res,next)=>{
  console.log("second middle ware is running..")
  // res.send("second middle ware..")
  next();
})

app.get("/",(req,res)=>{
  res.send("Name is ajay kumar gupta:")
  console.log('home')
})

app.get("/about",(req,res)=>{
  res.send("Name is ajay kumar gupta: about page")
  console.log('about')
})


app.listen(3000,()=>{
  console.log(` server started http://localhost:${3000}`)
})