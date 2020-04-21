const { Router } = require("express");
const Sprint = require("../models/Sprint");
const advancedResults = require("../middleware/advancedResults");

const { getSprints, createSprint } = require("../controllers/sprints");

const router = Router({ mergeParams: true });

router.route("/").get(advancedResults(Sprint), getSprints).post(createSprint);

module.exports = router;
