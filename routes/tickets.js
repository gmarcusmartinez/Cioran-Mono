const { Router } = require("express");

const { getTickets } = require("../controllers/tickets");

const router = Router({ mergeParams: true });

router.route("/").get(getTickets);

// router
//   .route("/:id")
//   .get(getSprint)
//   .put(updateSprint)
//   .delete(deleteSprint);

module.exports = router;
