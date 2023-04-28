const mongoose = require("mongoose");
const Users = require("./user");
const { ObjectID } = require("mongodb");

const CoverLetterSchema = new mongoose.Schema({
  company: { type: String },
  jobPosition: { type: String }, 
  content: { type: String },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
});

const CoverLetter = mongoose.model("CoverLetter", CoverLetterSchema);

module.exports = CoverLetter;