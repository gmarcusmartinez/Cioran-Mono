// const Sprint = require("../models/Sprint");
const Ticket = require("../models/Ticket");
const asyncHandler = require("../middleware/async");
// const ErrorResponse = require("../utils/errorResponse");

exports.getTickets = asyncHandler(async (req, res, next) => {
  const tickets = await Ticket.find({ sprint: req.params.sprintId }).populate({
    path: "sprint",
    select: "title"
  });

  res.status(200).json({
    success: true,
    count: tickets.length,
    data: tickets
  });
});
