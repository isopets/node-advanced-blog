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
app.get("/", async(req, res) => {
    const allBlogs = await BlogModel.find();
    console.log("allBlogの中身：", allBlogs);
    res.send("全ブログデータを読み取りました。");
});
// Read Single Blog
app.get("/blog/:id", async(req, res) => {
    const singleBlog = await BlogModel.findById(req.params.id);
    console.log("singleBlogの中身：", singleBlog);
    res.send("個別の記事ページ");
});
// Update Blog
app.get("/blog/update/:id", async(req, res) => {
    const singleBlog = await BlogModel.findById(req.params.id);
    console.log("singleBlogの中身：", singleBlog);
    res.send("個別の記事編集ページ");
});

// Read All Blogs
app.post("/blog/update/:id", (req, res) => {
    BlogModel.updateOne({ _id: req.params.id }, req.body).exec(error => {
        if (error) {
            console.log("データの編集が失敗しました");
            res.send("ブログデータの編集が失敗しました");
        } else {
            console.log("データの編集が成功しました");
            res.send("ブログデータの編集が成功しました");
        }
    });
});
// Delete Blog

// Connecting to port
app.listen(5000, () => {
    console.log("Listening on localhost port 5000");
});