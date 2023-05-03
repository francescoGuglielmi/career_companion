const mongoose = require("mongoose");
const Users = require("./user");
const { ObjectID } = require("mongodb");

const ApplicationSchema = new mongoose.Schema({
  company: { type: String },
  jobTitle: { type: String }, 
  location: { type: String },
  link: { type: String },
  jobDetails: { type: String },
  applicationStatus: { type: String},
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: { type: String},
  interviewDate: {type: String},
});

const Application = mongoose.model("Application", ApplicationSchema);

module.exports = Application;
