const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
const mongoose = require("mongoose")

mongoose.connect("mongodb + srv: //yuto-isogai:<password>