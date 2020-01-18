const { Router } = require("express");
const Sprint = require("../models/Sprint");
const { protect } = require("../middleware/auth");
const advancedResults = require("../middleware/advancedResults");

const {
  getSprints,
  getSprint,
  createSprint,
  updateSprint,
  deleteSprint
} = require("../controllers/sprints");

const ticketRouter = require("./tickets");

const router = Router({ mergeParams: true });
router.use("/:sprintId/tickets", ticketRouter);

router
  .route("/")
  .get(advancedResults(Sprint, "tickets"), getSprints)
  .post(protect, createSprint);

router
  .route("/:id")
  .get(getSprint)
  .put(protect, updateSprint)
  .delete(protect, deleteSprint);

module.exports = router;
