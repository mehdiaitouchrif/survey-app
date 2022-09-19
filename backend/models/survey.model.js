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

// Remove questions on survey deletion
surveySchema.pre("remove", async function (next) {
  await this.model("Question").deleteMany({ survey: this._id });
  next();
});

const Survey = mongoose.model("Survey", surveySchema);

module.exports = Survey;
