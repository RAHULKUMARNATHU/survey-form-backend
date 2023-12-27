const express = require("express");

const router = express.Router();

router.use("/survey", require("./surveyRoutes"));
router.use("/user", require("./authRoutes"));

module.exports = router;
