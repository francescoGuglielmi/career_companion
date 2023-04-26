const Application = require("../models/application");
const TokenGenerator = require("../models/token_generator");

const ApplicationsController = {
  Index: (req, res) => {
    Application.find()
      .populate({
        path: "user",
        select: "firstName lastName",
      })
      .exec(async (err, posts) => {
        if (err) {
          throw err;
        }
        const token = await TokenGenerator.jsonwebtoken(req.user_id);
        res.locals.user_id = req.user_id;
        res.status(200).json({ posts: posts, token: token });
      });
  },
  Create: (req, res) => {
    const application = new Application({...req.body, user: req.user_id});
    application.save(async (err) => {
      if (err) {
        throw err;
      }

      const token = await TokenGenerator.jsonwebtoken(req.user_id)
      res.status(201).json({ message: 'OK', token: token });
    });
  },
};

module.exports = ApplicationsController;
