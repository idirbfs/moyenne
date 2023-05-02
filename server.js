//var d'envirenement
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
const path = require("path");

//view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

//db config
const connectDB = require("./config/db");
connectDB();

app.use("/", require("./routes/index"));

app.listen(process.env.PORT, () =>
  console.log(`app running op PORT ${process.env.PORT}`)
);
