const express = require("express");
const validate = require("../middleware/validate.middleware");
const {
  getQuestion,
  createQuestion,
  getQuestions,
  updateQuestion,
  deleteQuestion,
} = require("../controllers/questions.controllers");
const {
  createQuestionSchema,
  getQuestionSchema,
  updateQuestionSchema,
  deleteQuestionSchema,
} = require("../schemas/question.schemas");
const router = express.Router({ mergeParams: true });

router
  .route("/")
  .post(validate(createQuestionSchema), createQuestion)
  .get(getQuestions);
router
  .route("/:id")
  .get(validate(getQuestionSchema), getQuestion)
  .put(validate(updateQuestionSchema), updateQuestion)
  .delete(validate(deleteQuestionSchema), deleteQuestion);

module.exports = router;
