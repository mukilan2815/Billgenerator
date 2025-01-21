const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
  email: { type: String, required: true },
  message: { type: String, required: true },
  platform: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports =
  mongoose.models.Feedback || mongoose.model("Feedback", feedbackSchema);
