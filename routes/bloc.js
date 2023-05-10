const router = require("express").Router();
const Bloc = require("../models/Bloc");
const Unitee = require("../models/Unitee");

router.get("/", async (req, res) => {
  try {
    const blocs = await Bloc.find({}).populate("unitees");
    res.send(blocs);
  } catch (err) {
    console.error(err.msg);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
