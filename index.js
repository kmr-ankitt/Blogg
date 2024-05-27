import express from "express";
import bodyParser from "body-parser";
import methodOverride from 'method-override';


// Initialisation
const app = express();
const port = 3000;
// Middlewares
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


// Get requests
app.get("/", (req, res) => {
  res.render("home.ejs");
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

//   const blogTitle = req.body["title"];
//   const blogBody = req.body["body"];
//   const blogAuthor = req.body["name"];

  res.render("home.ejs",{});
  
});

// Patch requests
app.patch("/edit", (req, res) => {
    
    const blogTitle = req.body["title"];
    const blogBody = req.body["body"];
    const blogAuthor = req.body["author"];
    
    res.render("home.ejs",{
        title: blogTitle,
        body: blogBody,
        author : blogAuthor
    });
});

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
