//var d'envirenement
const dotenv = require("dotenv");
dotenv.config()

const express = require("express");
const app = express();

//db config
const connectDB = require("./config/db");
connectDB();

 
app.use("/", require("./routes/index"));

const PORT = 3000;
app.listen(PORT, ()=> console.log(`app running op PORT ${PORT}`));