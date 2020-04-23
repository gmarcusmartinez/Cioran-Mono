const { Router } = require("express");

const { createTicket } = require("../controllers/tickets");

const router = Router({ mergeParams: true });

router.route("/").post(createTicket);

module.exports = router;
