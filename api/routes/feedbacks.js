const express = require("express");
const router = express.Router();
const FeedbackController = require('../controllers/feedbacks')

router.post("/", FeedbackController.Create);
router.get("/", FeedbackController.Index)
router.delete("/:feedbackId", FeedbackController.Delete);

module.exports = router;