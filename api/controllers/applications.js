const Users = require("../models/user");
const Application = require("../models/application");
const TokenGenerator = require("../models/token_generator");

const ApplicationsController = {
  Index: async (req, res) => {
    const user = await findUser(req.user_id);

    Application.find()
      .populate({
        path: "user",
        select: "email",
      })
      .exec(async (err, applications) => {
        if (err) {
          throw err;
        }
        const token = await TokenGenerator.jsonwebtoken(req.user_id);
        res.locals.user_id = req.user_id;
        res
          .status(200)
          .json({ applications: applications, user: user, token: token });
      });
  },

  Create: (req, res) => {
    const application = new Application({ ...req.body, user: req.user_id });
    application.save(async (err) => {
      if (err) {
        throw err;
      }

      const token = await TokenGenerator.jsonwebtoken(req.user_id);
      res.status(201).json({ message: "OK", token: token });
    });
  },
};

const findUser = (userId) => {
  return Users.findById(userId);
};

module.exports = ApplicationsController;
