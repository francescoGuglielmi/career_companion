const express = require("express");
const router = express.Router();

router.post("/", FeedbackController.Create);

module.exports = router;