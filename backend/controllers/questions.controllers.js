const Question = require("../models/question.model");

// Get questions
// @route   GET /surveys/:surveyId/questions
exports.getQuestions = async (req, res, next) => {
  const questions = await Question.find({ survey: req.params.surveyId });

  res.status(200).json({ questions });
};

// Create question
// @route   POST /surveys/:surveyId/questions
exports.createQuestion = async (req, res, next) => {
  if (req.params.surveyId) {
    req.body.survey = req.params.surveyId;
    const question = await Question.create(req.body);
    return res.status(201).json({ question });
  }
};

// Get question
exports.getQuestion = async (req, res, next) => {
  const question = await Question.findById(req.params.id);
  if (!question) {
    return res.status(404).json({ message: "No question found" });
  }

  res.status(200).json({ question });
};

// Update question
exports.updateQuestion = async (req, res, next) => {
  let question = await Question.findById(req.params.id);
  if (!question) {
    return res.status(404).json({ message: "No question found" });
  }

  question = await Question.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ question });
};

// Delete question
exports.deleteQuestion = async (req, res, next) => {
  const question = await Question.findById(req.params.id);
  if (!question) {
    return res.status(404).json({ message: "No question found" });
  }

  question.remove();

  res.status(200).json({ message: "Question removed" });
};
