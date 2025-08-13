import {Router} from "express";

const userRouter=Router()

//! group the rout
userRouter.get("/create-users", (req, res) => {
  res.send("UserPage");
});

userRouter.get("/get-all-users", (req, res) => {
  res.send("All_UserPage");
});

userRouter.get("/getUsersById", (req, res) => {
  res.send("UserPage_Id");
});

export default userRouter
