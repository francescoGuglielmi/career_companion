const User = require("../models/user");
const bcrypt = require('bcrypt');

const UsersController = {
  Create: async (req, res) => {
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
};

module.exports = UsersController;
