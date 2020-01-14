const { Router } = require("express");

const { getSprints } = require("../controllers/sprints");

const router = Router({ mergeParams: true });

router.route("/").get(getSprints);

module.exports = router;
