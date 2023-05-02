const express = require("express");
const router = express.Router();
const FeedbackController = require('../controllers/feedbacks')

router.post("/", FeedbackController.Create);

module.exports = router;