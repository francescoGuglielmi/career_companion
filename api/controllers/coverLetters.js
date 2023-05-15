const Users = require("../models/user");
const CoverLetter = require('../models/coverLetter');
const TokenGenerator = require("../models/token_generator");

const CoverLettersController = {
  Index: async (req, res) => {
    const user = await Users.findById(req.user_id) 

    CoverLetter.find()
      .populate({
        path: "user",
        select: "email",
      })
      .exec(async (err, coverLetters) => {
        if (err) {
          throw err;
        }
        const token = await TokenGenerator.jsonwebtoken(req.user_id);
        res.locals.user_id = req.user_id;
        res
          .status(200)
          .json({ coverLetters: coverLetters, user: user, token: token });
      });
  },

  Create: (req, res) => {
    let CoverLetterContent = { ...req.body, user: req.user_id };
    const coverLetter = new CoverLetter(CoverLetterContent);
    coverLetter.save(async (err) => {
      if (err) {
        throw err;
      }

      const token = await TokenGenerator.jsonwebtoken(req.user_id);
      res.status(201).json({ message: "OK", token: token });
    });
  },
};

module.exports = CoverLettersController;
