const Feedback = require('../models/feedback')
const TokenGenerator = require("../models/token_generator");

const FeedbackController = {
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

module.exports = FeedbackController;