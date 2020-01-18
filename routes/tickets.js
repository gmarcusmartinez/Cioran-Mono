const { Router } = require("express");
const { protect } = require("../middleware/auth");

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
  .post(protect, createTicket);

router
  .route("/:id")
  .get(getTicket)
  .put(protect, updateTicket)
  .delete(protect, deleteTicket);

module.exports = router;
