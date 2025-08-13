import espress from "express";
import cookieParser from "cookie-parser";

const app = espress();

// app.use(cookieParser()); // help to manage more efficient manner
app.use(cookieParser("secret"))

app.get("/", (req, res) => {
  res.cookie("name", "express", { maxAge: 1000 * 60 * 60 ,signed:true});
  res.send("Server is running..........");
});

app.get("/api/v1/product", (req, res) => {
  // console.log(req.cookies)// 1st method
  // console.log(req.headers.cookie)// there is some problem we need parse value key value pair

  //! *npm i cookie-parser this is the external library to managing cookie in sectet way..
  // console.log("Cookies", req.cookies);
  console.log("Signed cookies",req.signedCookies);
  // const  {name}=req.cookies
  // console.log(name)
  if (req.cookies.name && req.cookies.name === 'express') {
    return res.send({
      id: 1,
      name: "item_01",
      price: 20000,
    });
  }
  res.status(403).send({
    message: "you are not authorize for view this page",
  });
});

app.listen(3302, () => {
  console.log(`http://localhost:${3302}`);
});
