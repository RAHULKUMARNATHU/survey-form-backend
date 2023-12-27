const express = require("express");
const router = express.Router();

const surveyController = require("./../../../controllers/surveyController");

router
  .route("/")
  .post(surveyController.createSurvey)
  .get(surveyController.getSurvey);

module.exports = router;
