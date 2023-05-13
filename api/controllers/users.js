const User = require("../models/user");
const bcrypt = require('bcrypt');

const UsersController = {
  Create: async (req, res) => {

    if (!req.body.password || req.body.password.trim() === '') {
      res.status(400).json({ message: 'Password is required' });
      return;
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const user = new User({firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email, password: hashedPassword });
    user.save((err) => {
      if (err) {
        res.status(400).json({message: 'Bad request'})
      } else {
        res.status(201).json({ message: 'OK' });
      }
    });
  },

  Index: (req, res) => {
    User.findById(req.user_id, (err, data) => {
      if (err) {
        res.status(400).json({message: 'Unable to find user'})
      } else {
        const token = TokenGenerator.jsonwebtoken(req.user_id)
        res.status(200).json({user: data, token: token});
      }
    })
  },

  Update: async (req, res) => {
    try {
      const user = await User.findById(req.params.userId);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      user.firstName = req.body.firstName;
      user.lastName = req.body.lastName;
      user.email = req.body.email;
      await user.save();

      res.status(201).json({ message: "OK", user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

module.exports = UsersController;
