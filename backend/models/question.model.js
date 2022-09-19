const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: {
    type: String,
    enum: ["short", "paragraph", "checkbox", "mcq"],
    required: true,
    default: "short",
  },
  image: String,
  survey: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Survey",
    required: true,
  },
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
