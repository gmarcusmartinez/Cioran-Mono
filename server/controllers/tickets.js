const Sprint = require("../models/Sprint");
const Ticket = require("../models/Ticket");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/ErrorResponse");

exports.createTicket = asyncHandler(async (req, res, next) => {
  req.body.sprint = req.params.sprintId;
  console.log(req.params);

  const sprint = await Sprint.findById(req.params.sprintId);
  if (!sprint) {
    return next(new ErrorResponse(`Sprint not found.`, 404));
  }

  const ticket = await Ticket.create(req.body);

  res.status(200).json({
    success: true,
    data: ticket,
  });
});
