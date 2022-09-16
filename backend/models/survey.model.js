const mongoose = require("mongoose");

const surveySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: String,
  },
  { timestamps: true }
);

const Survey = mongoose.model("Survey", surveySchema);

module.exports = Survey;
