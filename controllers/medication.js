const Medication = require("../models/medicationSchema");

//adding a new Medication
const addMedication = async (req, res) => {
  const newMedication = new Medication({
    name: req.body.name,
    quantity: req.body.quantity,
    dose: req.body.dose,
    duration: req.body.duration,
  });

  await newMedication.save();
  res.status(201).json(newMedication);
};
//get all Medications
const getAllMedications = async (req, res) => {
  const medications = await Medication.find();
  res.json(medications);
};

//get a drugs
const getSingleMedication = async (req, res) => {
  const medication = await Medication.findById(req.params._id);
  res.json(medication);
};

//update a drug
const updateMedication = async (req, res) => {
  const foundMedication = await Medication.findById(req.params._id);
  if (foundMedication) {
    (foundMedication.name = req.body.name),
      (foundMedication.quantity = req.body.quantity),
      (foundMedication.dose = req.body.dose),
      (foundMedication.duration = req.body.duration);

    const updatedMedication = await foundMedication.save();
    res.json({ updatedMedication: updatedMedication });
  }
};

//delete a Medication
const deleteMedication = async (req, res) => {
  const foundMedication = await Medication.findById(req.params._id);
  if (foundMedication) {
    foundMedication.remove();
    res.json({ msg: `${foundMedication.name} removed` });
  } else {
    res.status(404).json({ error: "Medication not available" });
  }
};

module.exports = {
  addMedication,
  getAllMedications,
  getSingleMedication,
  updateMedication,
  deleteMedication,
};