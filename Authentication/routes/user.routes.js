import express from "express";
import User from "../models/user.model.js";

const router = express.Router();

//crud

//1.Create

router.post("/users", async (req, res) => {
  try {
    //! get the data from req body
    const { name, age, weight } = req.body;
    const newuser = new User({
      name,
      age,
      weight,
    });
    await newuser.save();
    res.status(200).json({
      status: true,
      message: "user created successfully....",
    });
  } catch (err) {
    res.status(500).json({
      satus: false,
      message: err.message,
    });
  }
});

//2.read
router.get("/userdata", async (req, res) => {
  try {
    const userfind = await User.find();
    res.status(200).json({
      status: true,
      message: userfind,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
});
//3.Update

router.put("/update-user/:id", async (req, res) => {
  const { id } = req.params;
  const { name, age, weight } = req.body;
  try {
    const updateduser=await User.findByIdAndUpdate(id,{
      name,age,weight
    },{new:true,runValidators:true})
    
    if(!updateduser){
     return res.status(401).json({
        success:false,
        message:"usernot found"
      })
      res.json({
        success:true,
        user:updateduser
      })
    }
  } catch (err) {
    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
});

//! 4.Delete

export default router;
