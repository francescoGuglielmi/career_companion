const Users = require("../models/user");
const Feedback = require('../models/feedback')
const TokenGenerator = require("../models/token_generator");

const FeedbackController = {

  Index: async (req, res) => {
    const user = await findUser(req.user_id);

    Feedback.find()
      .populate({
        path: "user",
        select: "firstName",
      })
      .exec(async (err, feedbacks) => {
        if (err) {
          throw err;
        }
        const token = await TokenGenerator.jsonwebtoken(req.user_id);
        res.locals.user_id = req.user_id;
        res
          .status(200)
          .json({ feedbacks: feedbacks, user: user, token: token });
      });
  },

  Create: (req, res) => {
    let feedbackData = { company: req.body.company, jobPosition: req.body.jobTitle, rating: req.body.rating, content: req.body.content, user: req.body.userId }
    const feedback = new Feedback(feedbackData)
    feedback.save(async (err) => {
      if (err) {
        throw err;
      }
      const token = await TokenGenerator.jsonwebtoken(req.user_id);
      res.status(201).json({ message: "OK", token: token });
    });
  }

}

const findUser = (userId) => {
  return Users.findById(userId);
};

module.exports = FeedbackController;