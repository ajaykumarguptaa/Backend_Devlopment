import express from "express";
import { userData } from "./data.js";
import { parse } from "postcss";

const app = express();
const PORT = 8043;

// GET Request
app.get("/", (req, res) => {
  res.send("server is running............");
});

// industry standard...
app.get("/api/v1/user", (req, res) => {
  res.send("/api/v1/user");
  console.log(req.query);
});

// request query parameter
app.get("/api/v1/user/parameter", (req, res) => {
  const { name } = req.query;

  if (name) {
    const user = userData.filter((user) => {
      return user.name === name;
    });
    return res.status(200).send(user); // use return so code stops here
  }

  res.status(200).send(userData);
});

//req params
app.get("/api/v1/user/:id", (req, res) => {
  const { id } = req.params;
  // console.log(typeof(id))
  const parseId = parseInt(id);
  // const userId=userData.find((itemId)=>itemId.id===parseId)

  if (id) {
    const userId = userData.filter((itemId) => {
      return itemId.id === parseId;
    });
    return res.status(200).send(userId);
  }

  return res.status(200).send(userData);

  // return res.status(200).send(userId)
  //-----------------------------------------
  // console.log(req.params);
  // res.status(200).send("user found")
});

//! POST Request it is for sensing data to server
app.use(express.json());

//* in post we sending data from frontend ,data comes in an {body}
app.post("/api/v1/user", (req, res) => {
  console.log(req.body);
  //push the data into data
  const { name, email, age, city } = req.body;
  // userData.push({id:userData.length+1, name, email, age, city });

  const newUser = {
    id: userData.length + 1,
    name,
    age,
    city,
  };
  userData.push(newUser);
  // console.log(name,email,age,city)
  res.status(201).json({
    message: "User created",
    Data: userData,
  });
});

//! put ---> when ueuse this updata all fields

app.put("/api/v1/user/:id", (req, res) => {
  console.log(req.body, req.params);
  const {
    body,
    params: { id },
  } = req;
  const parseId = parseInt(id);
  const userIndex = userData.findIndex((user) => user.id === parseId);
  if (userIndex === -1) {
    res.status(404).json({
      message: "User Not Found",
    });
  }
  userData[userIndex] = {
    id: parseId,
    ...body,
  };
  res.status(200).json({
    message: "user updated...",
    data: userData[userIndex],
    allUser: userData,
  });
});

//! patch ---> when ueuse this updata all fields
app.patch("/api/v1/user/:id", (req, res) => {
  const {
    body,
    params: { id },
  } = req;
  const parseId = parseInt(id);
  const userIndex = userData.findIndex((user) => user.id === parseId);
  if (userIndex === -1) {
    return res.status(404).json({
      message: "User not Found...",
      success: false,
    });
  }
  userData[userIndex] = {
    id: parseId,
    ...userData[userIndex],
    ...body,
  };
  res.status(200).json({
    message: `User updated which id is ${req.params.id} `,
    updated_data: userData[userIndex],
    All_Users: userData,
  });
});

//! delete --> request
app.delete("/api/v1/user/:id", (req, res) => {
  const { id } = req.params;
  const parsId = parseInt(id);
  const userIndex = userData.findIndex((user) => user.id === parsId);

  if (userIndex === -1) {
    res.status(404).json({
      message: "user Not Found.",
      success: false,
      All_data:userData
    });
  }
  userData.splice(userIndex, parsId);
  res
    .status(200)
    .json({ message: `User with ID ${parsId} deleted successfully`,
            data:userData
    });
});

app.listen(PORT, () => {
  console.log(`server is running http://localhost:${PORT}/api/v1/user`);
});
