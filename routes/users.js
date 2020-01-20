const { Router } = require("express");
const User = require("../models/User");
const { getUser, getUsers } = require("../controllers/users");
const advancedResults = require("../middleware/advancedResults");

const router = Router();

router.route("/").get(advancedResults(User), getUsers);
router.route("/:id").get(getUser);

module.exports = router;
