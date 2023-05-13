const mongoose = require('mongoose')

const User = require("./user");
const { ObjectID } = require("mongodb");

const FeedbackSchema = new mongoose.Schema({
  company: { type: String },
  jobPosition: { type: String }, 
  rating: { type: String },
  content: { type: String },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
});

const Feedback = mongoose.model("Feedback", FeedbackSchema);

module.exports = Feedback;