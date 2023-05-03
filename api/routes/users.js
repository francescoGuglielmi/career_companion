const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/users");

router.post("/", UsersController.Create);
router.put("/:userId", UsersController.Update);
// router.delete("/:userId", UsersController.Delete);

module.exports = router;
