const router = require("express").Router();
const Bloc = require("../models/Bloc");
const Unitee = require("../models/Unitee");
const mongoose = require("mongoose")

// router.get("/", async (req, res) => {
//    const unite1 = await Unitee.findById("644fe4aa3eee0b9111ba2477");

//   const unite2 = await Unitee.findById("644fe4aa3eee0b9111ba2478");
//   const unite3 = await Unitee.findById("644fe4aa3eee0b9111ba2479");
//   const unite4 = await Unitee.findById("644fe4aa3eee0b9111ba247a");
//   const unite5 = await Unitee.findById("644fe4aa3eee0b9111ba247b");
//   const unite6 = await Unitee.findById("644fe4aa3eee0b9111ba247c");
//   const unite7 = await Unitee.findById("644fe4aa3eee0b9111ba247d");
//   const unite8 = await Unitee.findById("644fe4aa3eee0b9111ba247e");
//   const unite9 = await Unitee.findById("644fe4aa3eee0b9111ba247f");
//   const unite10 = await Unitee.findById("644fe4aa3eee0b9111ba2480");
//   const unite11 = await Unitee.findById("644fe4aa3eee0b9111ba2481");
//   const unite12 = await Unitee.findById("644fe4aa3eee0b9111ba2482");
//   const unite13 = await Unitee.findById("644fe4aa3eee0b9111ba2483");
//   const unite14 = await Unitee.findById("644fe4aa3eee0b9111ba2484");
//   const unite15 = await Unitee.findById("644fe4aa3eee0b9111ba2485");
//   const unite16 = await Unitee.findById("644fe4aa3eee0b9111ba2486");
//   const unite17 = await Unitee.findById("644fe4aa3eee0b9111ba2487");
//   Bloc.insertMany(
//     [{nom: "informatique", credits: 19, unitees: [
//       unite1._id,
//       unite2._id,
//       unite3._id,
//       unite4._id,
//       unite5._id,
//       unite6._id]},
//     {nom: "gestion", credits: 8, unitees: [unite7._id,
//       unite8._id]},
//     {nom: "ingénierie des systèmes d'information", credits: 8, unitees: [unite9._id,
//       unite10._id]},
//     {nom: "professionalisation", credits: 5, unitees: [unite11._id]},
//     {nom: "compétances transversalles", credits: 17, unitees: [
//       unite12._id,
//       unite13._id,
//       unite14._id,
//       unite15._id,
//       unite16._id,
//       unite17._id]}]
//     );
//     res.send("inserted")
// });

router.get("/", async (req, res) => {
  res.send(await Bloc.find().populate("unitees"));
})



module.exports = router