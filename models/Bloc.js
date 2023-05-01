const mongoose = require("mongoose");
const Bloc = new mongoose.Schema({
  nom: String,
  credits: Number,
  unitees: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'unitee' 
  }]
})

module.exports = mongoose.model("bloc", Bloc)
