const { Router } = require("express");
const { protect } = require("../middleware/auth");

const {
  getTickets,
  getTicket,
  createTicket,
  updateTicket,
  deleteTicket,
  assignTicket,
  markTicketAsComplete
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

router.route("/:id/assign").put(protect, assignTicket);
router.route("/:id/complete").put(protect, markTicketAsComplete);

module.exports = router;
