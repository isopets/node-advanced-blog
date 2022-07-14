const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
const mongoose = require("mongoose");

// Connecting to MongoDB
mongoose
    .connect(
        "mongodb+srv://yuto-isogai:a5616randr@cluster0.coij8.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
        console.log("Success: Connected to MongoDB");
    })
    .catch(error => {
        console.error("Failure: Unconnected to MongoDB");
    });
// Defining Schema and Model
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: String,
    summary: String,
    image: String,
    textBody: String,
});
const BlogModel = mongoose.model("Blog", BlogSchema);

// BLOG function
app.get("/", (req, res) => {
    res.send("こんにちは");
});

// Create blog
app.get("/blog/create", (req, res) => {
    res.sendFile(__dirname + "/views/blogCreate.html");
});

app.post("/blog/create", (req, res) => {
    console.log("reqの中身", req.body);
    BlogModel.create(req.body, (error, savedBlogData) => {
        if (error) {
            console.log("データの書き込みが失敗しました");
            res.send("ブログデータの投稿が失敗しました");
        } else {
            console.log("データの書き込みが成功しました");
            res.send("ブログデータの投稿が成功しました");
        }
    });
});
// Read All Blogs
// Read Single Blog
// Update Blog
// Delete Blog

// Connecting to port
app.listen(5000, () => {
    console.log("Listening on localhost port 5000");
});