const express = require("express");
const router = express.Router();

const OpenaiController = require("../controllers/openaiController");

router.post("/interviewFeedback", OpenaiController.GenerateFeedback);
router.post("/interviewQuestions", OpenaiController.GenerateQuestions);

module.exports = router;