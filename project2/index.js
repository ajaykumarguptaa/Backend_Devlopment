import express from "express";
import path from "path";
import fs from "fs";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(path.resolve(), "public")));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  fs.readdir(`./files`, (err, files) => {
    res.render("index", { file: files });
    // console.log(files)
  });
});
// app.post("/submit-create", (req, res) => {
//   fs.writeFile(
//     `./files/${req.body.title.split(" ").join("").txt}`,
//     req.body.details,
//     (err) => {
//       res.render("/");
//     }
//   );

// });

app.get("/files/:filename", (req, res) => {
  fs.readFile(`./files/${req.params.filename}`, "utf8", (err, filedata) => {
    // console.log(fileData)
    res.render("show", { filename: req.params.filename, filedata: filedata });
  });
});

app.get("/delete/:filename", (req, res) => {
  const filePath = `./files/${req.params.filename}`;
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error("Error deleting file:", err);
      return res.status(500).send("Error deleting file");
    }
    res.redirect("/");
  });
});
//rename file name
app.get("/rename/:filename", (req, res) => {
  const oldName = req.params.filename;
  res.render("rename", { oldname: oldName });
});

app.post("/rename", (req, res) => {
  const oldPath = `./files/${req.body.oldname}`;
  const newPath = `./files/${req.body.newname}`;

  fs.rename(oldPath, newPath, (err) => {
    if (err) {
      console.log("Rename failed:", err);
      return res.status(500).send("Rename failed.");
    }
    res.redirect("/");
  });
});

// POST route — Create file
app.post("/submit-create", (req, res) => {
  const fileName = req.body.title.split(" ").join("") + ".txt";
  fs.writeFile(`./files/${fileName}`, req.body.details, (err) => {
    if (err) return res.status(500).send("Error saving file.");
    res.redirect("/"); // ✅ Render homepage after saving
  });
});

app.listen(4000, () => {
  console.log(`server is started http://localhost:4000`);
});
