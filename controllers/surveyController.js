const catchAsync = require("../utils/catchAsync");
const Survey = require("../models/surveyFormModel");
const AppError = require("../utils/appError");



/* Create Survey  */
exports.createSurvey = catchAsync(async (req, res, next) => {

  const result = await Survey.create(req.body);

  if (!result) {
    return next(new AppError("Error ! Error in creating Survey 😥"));
  }
  return res.status(201).json({
    status: "success",
    data: result,
  });
});

/*Get survey report  */
exports.getSurvey = catchAsync(async (req, res, next) => {
  const data = await Survey.find();
  if (!data) {
    return { success: false, message: "Survey data not found." };
  }

  return res.status(200).json({
    status: "success",
    data,
  });
});
