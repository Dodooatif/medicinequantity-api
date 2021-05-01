const express = require("express");
const {
  addMedication,
  getAllMedications,
  getSingleMedication,
  updateMedication,
  deleteMedication,
} = require("../controllers/medication");
const guide = require("../auth/bearerToken");

const router = express.Router();

router.route("/").post(guide, addMedication).get(guide, getAllMedications);
router
  .route("/:_id")
  .get(guide, getSingleMedication)
  .put(guide, updateMedication)
  .delete(guide, deleteMedication);

module.exports = router;
