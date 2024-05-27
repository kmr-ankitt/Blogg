import express from "express";
import bodyParser from "body-parser";
import methodOverride from 'method-override';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';



// Initialisation
const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.set("views", path.join(__dirname, "views"));
// app.use(express.static("public"));
app.use(express.static(__dirname + "/public/"));
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
    const blogTitle = req.body["title"];
    const blogBody = req.body["body"];
    const blogAuthor = req.body["name"];
  
    // Append the new section to the end of home.ejs
    const sectionToAdd = `
      <section class="third-page">
        <div class="third-page-container">
          <div class="view-title">
            <h2>${blogTitle || 'Blog Title'}</h2>
          </div>
          <div class="view-body">
            <h3>${blogBody || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis quod repellat repudiandae repellendus. Nesciunt quam tenetur fuga nemo sunt perspiciatis!'}</h3>
          </div>
          <div class="user-control">
            <div class="view-author">
              <h2>Author: <span class="view-author-name">${blogAuthor || 'Ankit kumar sahu'}</span></h2>
            </div>
            <div class="edit-btn">
              <a href="/">more</a>
              <a href="/">delete</a>
            </div>
          </div>
        </div>
      </section>
    `;
  
    const currentModuleURL = new URL(import.meta.url);
    const currentModuleDir = path.dirname(currentModuleURL.pathname);
    const homeFilePath = path.join(currentModuleDir, 'views', 'home.ejs');
  
    fs.readFile(homeFilePath, 'utf8', (err, data) => {
      if (err) {
        console.error("Error reading home.ejs:", err);
        return res.status(500).send("Internal Server Error");
      }
  
      // Append the new section to the existing content
      const updatedContent = data + sectionToAdd;
  
      // Render the updated home.ejs
      res.send(updatedContent);
    });

  });

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
