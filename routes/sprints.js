const { Router } = require("express");
const { protect } = require("../middleware/auth");

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
  .get(getSprints)
  .post(protect, createSprint);

router
  .route("/:id")
  .get(getSprint)
  .put(protect, updateSprint)
  .delete(protect, deleteSprint);

module.exports = router;
