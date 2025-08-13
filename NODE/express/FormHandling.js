import express from "express";

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get("/", (req, res) => {
  res.send("server setup done...!");
});

app.listen(4000, () => {
  console.log(`server is started at port http://localhost:${4000}`);
});
