const mongoose = require("mongoose");

const surveySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: String,
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

// Reverse populate with virtuals
surveySchema.virtual("questions", {
  ref: "Question",
  localField: "_id",
  foreignField: "survey",
  justOne: false,
});

const Survey = mongoose.model("Survey", surveySchema);

module.exports = Survey;
