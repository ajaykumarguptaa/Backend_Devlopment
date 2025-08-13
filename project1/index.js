import express from "express";
import path from "path";
import mongoose from "mongoose";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(path.resolve(), "public")));

app.set("view engine", "ejs");

mongoose
  .connect(
    "mongodb+srv://theincredibleknowledge:wLps6E6Q6rfwenUR@cluster0.9grdgrc.mongodb.net",
    {
      dbName: "form_handling",
    }
  )
  .then(() => console.log("Data base connected...."));
const fetchData = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const FormatData = mongoose.model("db", fetchData);

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/submit", async (req, res) => {
  try {
    const { name, email } = req.body;
    const newForm = new FormatData({ name, email });
    await newForm.save();
    res.status(200).send('Form submited successfully')
  } catch (err) {
    console.error("Error: ", err);
    res.status(500).send("internal server error !!");
  }
});


// dynamic routing 
app.get('/profile/:usernmae/:age',(req,res)=>{
  // res.send(`Welcome, ${req.params.usernmae}`)
  // res.send(req.params)
  res.send(`Welcome, ${req.params.usernmae} and age is ${req.params.age} `)

})


// const paths=(path.join(path.resolve(),'public'))
app.listen(3000, () => {
  console.log(`server is started at port http://localhost:${3000} `);
});













// import express from "express";
// import path from "path";
// import mongoose from "mongoose";
// import { fileURLToPath } from "url";

// const app = express();
// const PORT = 3000;

// // Setup __dirname for ES Modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "public")));
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// // MongoDB Connection
// mongoose
//   .connect("mongodb+srv://theincredibleknowledge:wLps6E6Q6rfwenUR@cluster0.9grdgrc.mongodb.net", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     dbName: "form_handling",
//   })
//   .then(() => console.log("✅ Database connected"))
//   .catch((err) => console.error("❌ DB connection error:", err));

// // Schema
// const fetchData = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//   },
//   { timestamps: true }
// );

// // Model
// const FormatData = mongoose.model("db", fetchData);

// // Routes
// app.get("/", (req, res) => {
//   res.render("index");
// });

// app.post("/submit", async (req, res) => {
//   try {
//     const { name, email } = req.body;

//     const newForm = new FormatData({ name, email });
//     await newForm.save();

//     res.status(200).send("✅ Form submitted successfully!");
//   } catch (err) {
//     console.error("❌ Error:", err);
//     res.status(500).send("Internal server error");
//   }
// });

// // Start Server
// app.listen(PORT, () => {
//   console.log(`🚀 Server started at http://localhost:${PORT}`);
// });






























// import express from "express";
// import { console } from "inspector/promises";
// import path from "path";

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(path.resolve(), "public")));

// // View engine
// app.set("view engine", "ejs");

// // Routes
// app.get("/", (req, res) => {
//   res.render("index");
// });

// //post submit
// app.post("/submit", (req, res) => {
//   const { name, email} = req.body;
//   console.log("Form submitted:", name, email);
//   res.send(`<h1>Thanks, ${name}.<br/> Your email is: ${email}</h1>`);
// });

// // Server
// app.listen(3000, () => {
//   console.log(`Server is running at http://localhost:3000`);
// });
