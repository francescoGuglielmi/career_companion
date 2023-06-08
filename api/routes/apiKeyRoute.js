const express = require("express");
const router = express.Router();

const ApiKeyController = require("../controllers/apiKeyController");

router.get("/", ApiKeyController.Index);

module.exports = router;