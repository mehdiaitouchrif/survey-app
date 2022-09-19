const express = require("express");
const {
  getQuestion,
  createQuestion,
  getQuestions,
} = require("../controllers/questions.controllers");
const router = express.Router({ mergeParams: true });

router.route("/").post(createQuestion).get(getQuestions);
router.route("/:id").get(getQuestion);

module.exports = router;
