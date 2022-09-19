const Survey = require("../models/survey.model");

// Get surveys
exports.getSurveys = async (req, res, next) => {
  const surveys = await Survey.find({}).populate("questions");

  res.status(200).json({ surveys });
};

// Create survey
exports.createSurvey = async (req, res, next) => {
  const survey = await await Survey.create(req.body);
  res.status(201).json({ survey });
};

// Get survey
exports.getSurvey = async (req, res, next) => {
  const survey = await Survey.findById(req.params.id).populate("questions");
  if (!survey) {
    return res.status(404).json({ message: "No survey found" });
  }

  res.status(200).json({ survey });
};
