const express = require("express");
const router = express.Router();


const authController = require("./../../../controllers/authController");
const surveyController = require("./../../../controllers/surveyController");

router
  .route("/")
  .post(surveyController.createSurvey)
  .get(authController.protect ,surveyController.getSurvey);

module.exports = router;
