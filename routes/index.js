const router = require("express").Router();
const Bloc = require("../models/Bloc");
const Unitee = require("../models/Unitee");

router.get("/", async (req, res) => {
  //res.render("../views/index.hbs", {});

  const blocs = await Bloc.find({}).populate("unitees");
  blocs.forEach((bloc) => {
    console.log("====================================");
    console.log(bloc.nom);
    console.log("====================================");
    bloc.unitees.forEach((unitee) => {
      console.log("====================================");
      console.log(`==${unitee.nom}`);
      console.log("====================================");
    });
  });
  res.json(blocs);
});

/***********************
bloc = [{
  nom: String
  credits: Number
  unitees : [{
    nom: String
    credits: Number
  }]
}]
**********************/

module.exports = router;
