const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
const mongoose = require("mongoose")

mongoose.connect("mongodb + srv: //yuto-isogai:<password>@cluster0.coij8.mongodb.net/?retryWrites=true&w=majority")

app.get("/", (req, res) => {
    res.send("こんにちは");
});

app.get("/blog/create", (req, res) => {
    res.sendFile(__dirname + "/views/blogCreate.html");
});

app.post("/blog/create", (req, res) => {
    console.log("reqの中身", req.body);
    res.send("ブログデータを投稿しました");
});

app.listen(5000, () => {
    console.log("Listening on localhost port 5000");
});



