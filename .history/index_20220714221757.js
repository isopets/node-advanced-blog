const express = require("express");
const app = express();

app.get("/", (req, res) => {
    // 追加
}); // 追加

app.listen(5000, () => {
    console.log("Listening on localhost port 5000");
});