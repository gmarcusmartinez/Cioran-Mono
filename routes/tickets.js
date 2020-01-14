const { Router } = require("express");

const {
  getTickets,
  getTicket,
  createTicket,
  updateTicket,
  deleteTicket
} = require("../controllers/tickets");

const router = Router({ mergeParams: true });

router
  .route("/")
  .get(getTickets)
  .post(createTicket);

router
  .route("/:id")
  .get(getTicket)
  .put(updateTicket)
  .delete(deleteTicket);

module.exports = router;
