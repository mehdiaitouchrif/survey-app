const express = require("express");
const {
  getQuestion,
  createQuestion,
  getQuestions,
  updateQuestion,
  deleteQuestion,
} = require("../controllers/questions.controllers");
const router = express.Router({ mergeParams: true });

router.route("/").post(createQuestion).get(getQuestions);
router
  .route("/:id")
  .get(getQuestion)
  .put(updateQuestion)
  .delete(deleteQuestion);

module.exports = router;
