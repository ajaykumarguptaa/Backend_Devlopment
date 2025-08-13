import express from 'express'
import connectDb from './config/db.js'
import userRoute from './routes/user.routes.js'

const app=express()

//connect Db

app.use(express.json())
connectDb()


app.use("/api/",userRoute)

app.get("/",(req,res)=>{
  res.send("server is ready...")
})



app.listen(3045)