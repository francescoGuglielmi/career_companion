const User = require("../models/user");
const TokenGenerator = require("../models/token_generator")
const bcrypt = require('bcrypt')

const SessionsController = {

  Create: async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    let user = await User.findOne({ email: email })
    if (!user) {
      console.log("auth error: user not found")
      res.status(404).json({ message: "auth error" });
    } else if (!(await bcrypt.compare(password, user.password))) {
      console.log("auth error: passwords do not match")
      res.status(401).json({ message: "auth error" });
    } else {
      const token = await TokenGenerator.jsonwebtoken(user.id)
      res.status(201).json({ token: token, message: "OK", user_id: user.id });
    }
  }
};

module.exports = SessionsController;
