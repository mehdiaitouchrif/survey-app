const express = require("express");
const validate = require("../middleware/validate.middleware");
const {
  getSurveys,
  createSurvey,
  getSurvey,
  updateSurvey,
  deleteSurvey,
} = require("../controllers/survey.controllers");
const router = express.Router();

// use survey router
const questionRouter = require("./questions.routes");
const {
  createSurveySchema,
  getSurveySchema,
  updateSurveySchema,
  deleteSurveySchema,
} = require("../schemas/survey.schemas");
router.use("/:surveyId/questions", questionRouter);

router
  .route("/")
  .get(getSurveys)
  .post(validate(createSurveySchema), createSurvey);
router
  .route("/:id")
  .get(validate(getSurveySchema), getSurvey)
  .put(validate(updateSurveySchema), updateSurvey)
  .delete(validate(deleteSurveySchema), deleteSurvey);

module.exports = router;
