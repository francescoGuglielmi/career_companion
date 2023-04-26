const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema(
  {
    message: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Application = mongoose.model("Application", ApplicationSchema);

module.exports = Application;
