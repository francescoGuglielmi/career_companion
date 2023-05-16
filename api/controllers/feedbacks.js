const User = require("../models/user");
const Feedback = require('../models/feedback')
const TokenGenerator = require("../models/token_generator");

const FeedbackController = {

  Index: async (req, res) => {
    const user = await User.findById(req.user_id);

    Feedback.find()
      .populate({
        path: "user",
        select: "firstName",
      })
      .exec(async (err, feedbacks) => {
        // if (err) {
        //   throw err;
        // }
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
      // if (err) {
      //   throw err;
      // }
      const token = await TokenGenerator.jsonwebtoken(req.user_id);
      res.status(201).json({ message: "OK", token: token });
    });
  },

  Delete: async (req, res) => {
    try {
      const feedback = await Feedback.findById(req.params.feedbackId);

      if (!feedback) {
        return res.status(404).json({ error: "Feedback not found" });
      }

      await feedback.delete();

      res.status(200).json({ message: "OK" });
    } catch (error) {
      // console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

}

module.exports = FeedbackController;