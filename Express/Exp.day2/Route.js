import express from "express";
import userRouter from "./user.routes.js";


const app = express();

// app.use(userRouter)
app.use("/api/v1",userRouter)

 

app.get("/", (req, res) => {
  res.send("server is running....");
});


app.listen(3001, () => {
  console.log(`http://localhost:${3001}`);
});
