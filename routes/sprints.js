const { Router } = require("express");

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
  .post(createSprint);

router
  .route("/:id")
  .get(getSprint)
  .put(updateSprint)
  .delete(deleteSprint);

module.exports = router;
