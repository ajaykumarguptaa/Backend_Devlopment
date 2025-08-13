import express from "express";
import {genertaeToken} from '../utility/token.Util.js'
const router = express.Router();



// generate token and hit api end point....
// Home Rout

router.get("/generate-token", (req, res) => {
  const token = genertaeToken();
  res.status(200).json({
    message: "Token henerated please save it for future use..",
    token: token,
  }); 
});

router.get("/", (req, res) => {
  res.status(200).json({
    message: " welcome to Home page..",
  });
});

export default router;
