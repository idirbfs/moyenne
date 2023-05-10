const mongoose = require("mongoose");
const Unitee = new mongoose.Schema({
  nom: String,
  credits: Number,
  creditsCumulees: Number,
  note: Number,
});

module.exports = mongoose.model("unitee", Unitee);
