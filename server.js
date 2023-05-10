const express = require("express");
const app = express();

//var d'envirenement
const dotenv = require("dotenv");
dotenv.config();

//db config
require("./config/db")();

//config middleware
app.use(express.json());

//routes
app.use("/unitee", require("./routes/unitee"));

app.listen(process.env.PORT, () =>
  console.log(`app running on port: ${process.env.PORT}`)
);
