const express = require("express");

const router = express.Router();

router.use("/survey", require("./surveyRoutes"));

module.exports = router;
