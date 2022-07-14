const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("こんにちは");
});

app.get("/blog/create", (req, res) => { // 追加

    }) // 追加

app.post("/blog/create", (req, res) => {
    console.log("POSTリクエストが実行されました");
});

app.listen(5000, () => {
    console.log("Listening on localhost port 5000");
});