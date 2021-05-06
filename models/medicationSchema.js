const mongoose = require("mongoose");

const medicationSchema = mongoose.Schema(
  {
    date: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
    dose: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Medication = mongoose.model("Medication", medicationSchema);
module.exports = Medication