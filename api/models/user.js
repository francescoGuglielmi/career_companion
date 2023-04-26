const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

UserSchema.index({ email: 1 }, { unique: true });

const User = mongoose.model("User", UserSchema);

module.exports = User;