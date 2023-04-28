const express = require("express");
const router = express.Router();

const CoverLettersController = require("../controllers/coverLetters");

router.get("/", CoverLettersController.Index);
router.post("/", CoverLettersController.Create);

module.exports = router;