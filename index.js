import express from "express";
import bodyParser from "body-parser";

// Initialisation
const app = express();
const port = 3000;

// Middlewares
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}))


// Get requests
app.get("/" , (req, res)=>{
    res.render("home.ejs")
})

app.get("/post", (req , res)=>{
    res.render("post.ejs")
})

app.get("/about", (req , res)=>{
    res.render("about.ejs")
})

app.get("/edit", (req , res)=>{
    res.render("edit.ejs")
})

// Post requests
app.post("/post", (req, res)=>{
    res.render("post.ejs")
})

// Patch requests
app.patch("/edit", (req, res)=>{
    res.render("post.ejs")
})


app.listen(port, ()=>{
    console.log(`Server started at port ${port}`)
})