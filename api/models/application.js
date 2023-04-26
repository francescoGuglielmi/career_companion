const mongoose = require("mongoose");
const Users = require("./user");
const { ObjectID } = require("mongodb");

const ApplicationSchema = new mongoose.Schema({
  company: { type: String },
  jobTitle: { type: String }, 
  location: { type: String },
  createdBy: {
    type: ObjectID,
    ref: "Users",
    immutable: true,
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
});

const Application = mongoose.model("Application", ApplicationSchema);

module.exports = Application;
