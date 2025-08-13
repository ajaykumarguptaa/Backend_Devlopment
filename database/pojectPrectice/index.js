import express from "express";
import mongoose from "mongoose";
import path from "path";
const app = express();
// import { db } from "./models/user.model.js";
import { userData } from "./models/user.model.js";
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(path.resolve(), "public")));


// call data base
// await db();
mongoose
  .connect(
    "mongodb+srv://theincredibleknowledge:wLps6E6Q6rfwenUR@cluster0.9grdgrc.mongodb.net/",
    {
      dbName: "prectice_data_base",
    }
  )
  .then(() => console.log("Data base connected..."))
  .catch((err) => console.log("Error: ", err));

app.get("/", (req, res) => {
  res.render("index");
  // res.render("read")
});

app.post("/create", async (req, res) => {
  let { name, username, email, password, image } = req.body;

  try {
    let createUser = await userData.create({
      name,
      email,
      password,
      username,
      image,
    });
  
    const users = await userData.find();

    // Step 3: Render and pass the users to EJS
    res.render("read", { user: users });
  } catch (error) {
    console.error("Create Error:", error);
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message, // Add this to understand what's going wrong
    });
  }
});

//edit
app.get("/read", async (req, res) => {
  try {
    const users = await userData.find({});
    res.render("read", { user: users });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/edit/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await userData.findById(id);
    if (!user) {
      return res.status(404).send("User not found");
    }

    // ✅ Pass `user` to EJS view
    res.render("edit", { user });
  } catch (error) {
    console.error("Edit GET Error:", error);
    res.status(500).send("Internal Server Error");
  }
});


app.post("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, image } = req.body;

  try {
    await userData.findByIdAndUpdate(id, {
      name,
      email,
      image,
    });

    res.redirect("/read"); // redirect to read or list page after update
  } catch (error) {
    console.error("Edit POST Error:", error);
    res.status(500).send("Failed to update user");
  }
});

app.get("/delete/:id",async(req,res)=>{
  const {id}=req.params;
  try{
      const user=await userData.findByIdAndDelete(id)
      res.redirect('/read')
  }catch(err){
    console.error("Edit GET Error:", error);
    res.status(500).send("Internal Server Error");
  }

})

// app.get("/editUser", async (req, res) => {
//   let updateUser = await userData.findByIdAndUpdate({});
// });

app.listen(3130, () => {
  console.log(`server is started http://localhost:${3130}`);
});
