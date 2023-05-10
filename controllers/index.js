const Bloc = require("../models/Bloc");
const Unitee = require("../models/Unitee");

const getBlocs = async () => {
  return await Bloc.find({}).populate("unitees");
};

const getUnitees = async () => {
  return await Unitee.find({});
};

const getUniteeById = async (id) => {
  return await Unitee.findById(id);
};

const setUniteeNoteById = async (id, note) => {
  await Unitee.findByIdAndUpdate({ id }, { note });
};

const setUniteeCreditsCumuleesById = async (id) => {
  let unitee = await Unitee.findById({ id });
  unitee.creditsCumulees = unitee.note >= 10 ? unitee.credits : 0;
  unitee.save();
};

const setBlocNoteById = async (id) => {
  let bloc = await Bloc.findById({ id });
  const unitees = bloc.unitees;
  let note = 0;
  for (let index = 0; index < unitees.length; index++) {
    note = unitees.note;
  }
  note = note / unitees.length;
  bloc.note = note;
  bloc.save();
};

const setBlocCreditsCumuleesById = async (id) => {
  let creditCumulees = 0;
  let bloc = await Bloc.findById({ id });
  bloc.unitees.forEach((unitee) => {
    creditCumulees += unitee.creditCumulees;
  });
};

const calculMoyenneGle = async () => {
  let moyenne = 0;
  const blocs = await Bloc.find({});
  blocs.forEach((bloc) => {
    moyenne += bloc.note;
  });
  return moyenne / blocs.length;
};

module.exports = {
  getBlocs,
  getUnitees,
  getUniteeById,
  setUniteeNoteById,
  setUniteeCreditsCumuleesById,
  setBlocNoteById,
  setBlocCreditsCumuleesById,
  calculMoyenneGle,
};
