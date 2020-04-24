const { Router } = require("express");

const { getTickets, createTicket } = require("../controllers/tickets");

const router = Router({ mergeParams: true });

router.route("/").get(getTickets).post(createTicket);

module.exports = router;
