const express = require("express");
const app = express();

app.get("/", (req, res) => {

});

app.listen(5000, () => {
    console.log("Listening on localhost port 5000");
});