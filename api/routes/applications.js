const express = require("express");
const router = express.Router();

const ApplicationsController = require("../controllers/applications");

router.get("/", ApplicationsController.Index);
router.post("/", ApplicationsController.Create);
router.put("/:applicationId", ApplicationsController.Update);
router.delete("/:applicationId", ApplicationsController.Delete);

module.exports = router;
