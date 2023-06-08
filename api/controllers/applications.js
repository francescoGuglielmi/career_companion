const User = require("../models/user");
const Application = require("../models/application");
const TokenGenerator = require("../models/token_generator");
const { application } = require("express");

const ApplicationsController = {
  Index: async (req, res) => {
    const user = await User.findById(req.user_id);

    Application.find()
      .populate({
        path: "user",
        select: "email",
      })
      .sort({ createdAt: -1 })
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
    let applicationContent = { ...req.body, user: req.user_id };
    const application = new Application(applicationContent);
    application.save(async (err) => {
      if (err) {
        throw err;
      }

      const token = await TokenGenerator.jsonwebtoken(req.user_id);
      res.status(201).json({ message: "OK", token: token });
    });
  },

  Update: async (req, res) => {
    try {
      const application = await Application.findById(req.params.applicationId);

      if (!application) {
        return res.status(404).json({ error: "Application not found" });
      }

      application.applicationStatus = req.body.applicationStatus;
      application.interviewDate = req.body.interviewDate;
      await application.save();

      res.status(201).json({ message: "OK", application });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  Delete: async (req, res) => {
    try {
      const application = await Application.findById(req.params.applicationId);

      if (!application) {
        return res.status(404).json({ error: "Application not found" });
      }

      await application.delete();

      res.status(200).json({ message: "OK" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

module.exports = ApplicationsController;
