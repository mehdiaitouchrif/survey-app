const Survey = require("../models/survey.model");
const ErrorResponse = require("../utils/error.utils");

// Get surveys
exports.getSurveys = async (req, res, next) => {
  const surveys = await Survey.find({}).populate("questions");

  res.status(200).json({ surveys });
};

// Create survey
exports.createSurvey = async (req, res, next) => {
  try {
    req.body.user = req.user.id;
    const survey = await await Survey.create(req.body);
    res.status(201).json({ survey });
  } catch (error) {
    next(error);
  }
};

// Get survey
exports.getSurvey = async (req, res, next) => {
  try {
    const survey = await Survey.findById(req.params.id).populate("questions");
    if (!survey) {
      return res.status(404).json({ message: "No survey found" });
    }

    res.status(200).json({ survey });
  } catch (error) {
    next(error);
  }
};

// Update survey
exports.updateSurvey = async (req, res, next) => {
  try {
    let survey = await Survey.findById(req.params.id).populate("questions");
    if (!survey) {
      return res.status(404).json({ message: "No survey found" });
    }

    // check ownership
    if (survey.user.toString() !== req.user.id) {
      return next(
        new ErrorResponse("Not authorized to access this route", 401)
      );
    }

    survey = await Survey.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({ survey });
  } catch (error) {
    next(error);
  }
};

// Delete survey
exports.deleteSurvey = async (req, res, next) => {
  try {
    const survey = await Survey.findById(req.params.id).populate("questions");
    if (!survey) {
      return res.status(404).json({ message: "No survey found" });
    }

    // check ownership
    if (survey.user.toString() !== req.user.id) {
      return next(
        new ErrorResponse("Not authorized to access this route", 401)
      );
    }

    survey.remove();

    res.status(200).json({ message: "Survey removed" });
  } catch (error) {
    next(error);
  }
};
