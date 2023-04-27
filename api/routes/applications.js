const express = require("express");
const router = express.Router();

const ApplicationsController = require("../controllers/applications");

router.get("/", ApplicationsController.Index);
router.post("/", ApplicationsController.Create);

module.exports = router;
