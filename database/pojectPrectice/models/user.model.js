import mongoose from "mongoose";
import { type } from "os";

// export async function db(){
//   try {
//     await mongoose.connect("mongodb+srv://theincredibleknowledge:wLps6E6Q6rfwenUR@cluster0.9grdgrc.mongodb.net/", {
//       dbName: "prectice_data_base"
//     });
//     return console.log("Data Base Connected.....");
//   } catch (err) {
//     return console.log("Error: ", err);
//   }
// }

// user schema  write

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    image: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export const userData = mongoose.model("userData", userSchema);
