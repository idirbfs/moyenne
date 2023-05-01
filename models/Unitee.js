const mongoose = require("mongoose");
const Unitee = new mongoose.Schema({
  nom: String,
  credits: Number,
  note: Number,
})

module.exports = mongoose.model("unitee", Unitee)
