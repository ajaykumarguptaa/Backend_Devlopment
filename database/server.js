import express from "express";
import mongoose from "mongoose";
const app = express();

// db connect
mongoose
  .connect(
    "mongodb+srv://theincredibleknowledge:wLps6E6Q6rfwenUR@cluster0.9grdgrc.mongodb.net",
    {
      dbName: "test_Data_Base",
    }
  )
  .then(() => console.log("Data base connected...."))
  .catch((err) => console.log("Error: ", err));

// user Schema define
const userModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
});

const UserData = mongoose.model("UserData", userModel);

app.get("/", (req, res) => {
  res.send("server is running....");
});
// add define data onn the data base in mongodb
app.get("/create", async (req, res) => {
  let createDb = await UserData.create({
    name: "aman",
    email: "amangupat2@gmail.com",
    username: "23bca104",
  });
  res.status(200).json({
    message: "created successfully",
  });
});
// update data base
app.get("/update", async (req, res) => {
  const updated = await UserData.findOneAndUpdate({ username: "23bca108" });
  res.json({
    updated,
  });
});

app.get("/getdata", async (req, res) => {
  let users = await UserData.find({});
  res.json({ users });
});

app.get("/getone", async (req, res) => {
  let findOne = await UserData.findOne({ username: "23bca104" });
  res.json({
    findOne,
  });
});
app.get("/deleteuser", async (req, res) => {
  try {
    let user = await UserData.findOneAndDelete({ username: "23bca104" });
    res.status(200).json({ message: "Data Deleted....!!!", user });
  } catch (err) {
    res.status(500).json({
      message: "Data not found",
    });
  }
});
const port = 3108;
app.listen(port, () => {
  console.log(` srver started at loclhost http://localhost:${port}`);
});
