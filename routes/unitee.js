const router = require("express").Router();
const { getUnitees, getUniteeById } = require("../controllers");

//get all unitees
router.get("/", async (req, res) => {
  try {
    res.json(await getUnitees());
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//get unitee by id
router.get("/:id", async (req, res) => {
  try {
    console.log("====================================");
    console.log(req.params.id);
    console.log("====================================");
    res.json(await getUniteeById(req.params.id));
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
