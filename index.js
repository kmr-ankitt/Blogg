import express from "express";
import bodyParser from "body-parser";
import methodOverride from 'method-override';
import path from 'path';
import { fileURLToPath } from 'url';



// Initialisation
const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const content = [{title: "Zealot", body : "Zealot is a Tree-Walking Interpreter designed for simplicity, efficiency, and ease of use which I developed while learning. It aims to provide a clean and concise syntax while offering powerful features for developing a wide range of applications." , author: "Ankit kumar sahu"}]

// Middlewares
app.set("views", path.join(__dirname, "views"));
app.use(express.static(__dirname + "/public/"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


// Get requests
app.get("/", (req, res) => {
  res.render("home.ejs", {
    result : content
  });
});

app.get("/post", (req, res) => {
  res.render("post.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/edit", (req, res) => {
  res.render("edit.ejs");
});

// Post requests
app.post("/post", (req, res) => {
    const blogTitle = req.body["title"];
    const blogBody = req.body["body"];
    const blogAuthor = req.body["name"];
    const newObj = {title: blogTitle , body : blogBody, author : blogAuthor}

    content.push(newObj);
    res.redirect("/")
  });

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
