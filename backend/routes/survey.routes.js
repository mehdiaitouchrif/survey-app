const express = require("express");
const {
  getSurveys,
  createSurvey,
  getSurvey,
} = require("../controllers/survey.controllers");
const router = express.Router();

// use survey router
const questionRouter = require("./questions.routes");
router.use("/:surveyId/questions", questionRouter);

router.route("/").get(getSurveys).post(createSurvey);
router.get("/:id", getSurvey);

module.exports = router;
