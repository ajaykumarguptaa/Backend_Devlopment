import express from "express";
import publicRoutes from "./Routes/public.Routes.js";
import privateRoutes from "./Routes/private.Routes.js";
import LogMiddleware from "./middleware/log.middleware.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (!fs.existsSync(path.join(__dirname, "logs"))) {
  fs.mkdirSync(path.join(__dirname, "logs"));
}

//* InBuilt MiddleWare...
app.use(express.json());

// !global custom middleware
app.use(LogMiddleware);

//? Middleware to Routes...
app.use("/public", publicRoutes);
app.use("/private", privateRoutes);

app.listen(3004, () => {
  console.log(`http://localhost:${3004}`);
});
